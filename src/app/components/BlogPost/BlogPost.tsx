import React from "react";
import { Card, Row, Col, ListGroup } from "react-bootstrap";
import styles from "./blogpost.module.scss";
import Banner from "../Banner";

/**
 * ManageRead component displays a list of manga posts.
 *
 * @param {Array} mangaPosts - List of manga posts to display.
 */
const ManageRead: React.FC<ManageReadProps> = ({ mangaPosts }) => {
  return (
    <>
      <h4>Manga Read</h4>
      <ListGroup variant="flush">
        {mangaPosts.map((post, index) => (
          <ListGroup.Item
            key={index}
            className={styles["related-post-container"]}
          >
            <Banner
              className={styles["banner-card-manga"]}
              key={`manga-${index}`}
              bgImageSrc={post.image}
            />
            <div>
              <h5>{post.title}</h5>
              <p className={styles.postDate}>{post.date}</p>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

/**
 * BlogPost component displays the main blog post along with related posts and manga reads.
 *
 * @param {string} id - The ID for the main blog post container.
 * @param {string} mainImage - Source URL for the main blog post image.
 * @param {string} mainTitle - Title of the main blog post.
 * @param {string} mainSummary - Summary of the main blog post.
 * @param {Array} relatedPosts - List of related blog posts.
 * @param {Array} mangaPosts - List of manga posts for the ManageRead component.
 */
const BlogPost: React.FC<BlogPostProps> = ({
  id,
  mainImage,
  mainTitle,
  mainSummary,
  relatedPosts,
  mangaPosts,
}) => {
  return (
    <>
      <Row className="gap-4 m-2" id={id}>
        <Col xl={8} lg={12} md={12} sm={12}>
          <Card className={styles.blogPostContainer}>
            <Row>
              <Col xl={8} md={12} sm={12}>
                <Card.Img
                  variant="top"
                  src={mainImage}
                  className={styles.mainImage}
                />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    1 Month Ago
                  </Card.Subtitle>
                  <Card.Title className={styles.postTitle}>
                    {mainTitle}
                  </Card.Title>
                  <Card.Text className={styles.postSummary}>
                    {mainSummary}
                  </Card.Text>
                  <Card.Link href="/#" className={styles["viewPostButton"]}>
                    View Post
                  </Card.Link>
                </Card.Body>
              </Col>
              <Col md={12} xl={4}>
                <ListGroup
                  variant="flush"
                  className="h-max d-flex justify-content-start align-items-stretch gap-4"
                >
                  {relatedPosts.map((post, index) => (
                    <ListGroup.Item
                      key={index}
                      className={styles["related-post-container"]}
                    >
                      <Banner
                        className={styles["banner-card"]}
                        key={`destination-${index}`}
                        bgImageSrc={post.image}
                      />
                      <div>
                        <h5>{post.title}</h5>
                        <p className={styles.postDate}>{post.date}</p>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col>
          <ManageRead mangaPosts={mangaPosts} />
        </Col>
      </Row>
    </>
  );
};

export default BlogPost;
