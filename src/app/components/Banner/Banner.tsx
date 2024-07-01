import Image from "next/image";
import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import styles from "./banner.module.scss";
import clsx from "clsx";
import { BannerProps } from "./Banner.type";

const Banner: React.FC<BannerProps> = ({
  bgImageSrc,
  title,
  description,
  actionTitle,
  onActionClick,
  style,
  className,
  classes,
  showBadge = false,
}) => {
  return (
    <div className={clsx(styles.banner, className)} style={style}>
      {bgImageSrc && (
        <Image
          placeholder="blur"
          blurDataURL="data:image/gif;base64,R0lGODlhAQABAPAAAAKB0v///yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
          src={bgImageSrc}
          alt={title || "Banner Image"}
          priority
          layout="fill"
          className={clsx(styles["banner-image"], classes?.bannerImage)}
        />
      )}
      <div
        className={clsx(styles["banner-overlay"], classes?.bannerOverlay)}
      ></div>
      <Container
        className={clsx(styles["banner-content"], classes?.bannerContent)}
      >
        <Row className="justify-content-center">
          <Col sm={12}>
            {showBadge && <span className={styles["banner-badge"]}>Light</span>}
            {title && (
              <h1
                className={clsx(styles["banner-title"], classes?.bannerTitle)}
              >
                {title}
              </h1>
            )}
            {description && (
              <p
                className={clsx(
                  styles["banner-description"],
                  classes?.bannerDescription
                )}
              >
                {description}
              </p>
            )}
          </Col>
        </Row>
        <Col sm={12}>
          {actionTitle && (
            <button
              className={clsx(
                styles["banner-action"],
                classes?.bannerAction,
                " justify-content-center"
              )}
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
