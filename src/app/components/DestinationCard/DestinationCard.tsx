import React from "react";
import { Card, Button } from "react-bootstrap";
import Image from "next/image";
import styles from "./destinationcard.module.scss";
import { DestinationCardProps } from "./DestinationCard.type";
import Link from "next/link";

const DestinationCard: React.FC<DestinationCardProps> = ({
  imageSrc,
  tags,
  title,
  author,
  date,
  shares,
  description,
  href,
}) => {
  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={styles.cardImage}
        />
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Card.Body>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <div className={styles.authorInfo}>
          <Image
            src="/assets/author.jpeg"
            alt={author}
            width={40}
            height={40}
            className={styles.authorImage}
          />
          <div className={styles.authorInfoDetails}>
            <span>{author}</span>
            <hr style={{ display: "inline", width: "2rem" }} />
            <span className={styles.date}>{date}</span>
            <span className={styles.shares}>
              &#x2022; {shares}
              <Image
                src="/assets/shareIcon.png"
                alt="shareIcon"
                width={12}
                height={12}
              />{" "}
              shares
            </span>
          </div>
        </div>
        <Card.Text className={styles.cardText}>{description}</Card.Text>
        <Link className={styles.viewPostButton} href={href}>
          View Post
        </Link>
      </Card.Body>
    </Card>
  );
};

export default DestinationCard;
