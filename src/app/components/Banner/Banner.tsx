import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./banner.module.scss";

interface BannerProps {
  bgImageSrc?: string;
  width?:number;
  height?: number;
  title?: string;
  description?: string;
  actionTitle?: string;
  onActionClick?: () => void;
}

const Banner: React.FC<BannerProps> = ({
  bgImageSrc,
  title,
  description,
  actionTitle,
  onActionClick,
}) => {
  return (
    <div className={styles.banner}>
      {bgImageSrc && (
        <Image
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAAKB0v///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          src={bgImageSrc}
          alt={title || "Banner Image"}
          priority
          layout="fill"
          className={styles["banner-image"]}
        />
      )}
      <div className={styles["banner-overlay"]}></div>
      <Container className={styles["banner-content"]}>
        <Row className="justify-content-center">
          <Col sm={12}>
            {title && <h1 className={styles["banner-title"]}>{title}</h1>}
            {description && (
              <p className={styles["banner-description"]}>{description}</p>
            )}
          </Col>
        </Row>
        <Col sm={12}>
          {actionTitle && (
            <button
              className={styles["banner-action"] + " justify-content-center"}
              onClick={onActionClick}
            >
              {actionTitle}
            </button>
          )}
        </Col>
      </Container>
    </div>
  );
};

export default Banner;
