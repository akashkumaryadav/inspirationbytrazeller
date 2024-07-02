import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./banner.module.scss";
import { BannerProps } from "./Banner.type";

/**
 * Banner component displays a full-width banner with optional background image, title, description, and action button.
 *
 * @param {string} bgImageSrc - Source URL of the background image.
 * @param {string} title - Title text to display on the banner.
 * @param {string} description - Description text to display on the banner.
 * @param {string} actionTitle - Text for the action button.
 * @param {function} onActionClick - Function to call when action button is clicked.
 * @param {object} style - Custom inline styles for the banner.
 * @param {string} className - Additional class name for the banner.
 * @param {object} classes - Custom classes for individual elements within the banner.
 * @param {boolean} showBadge - Whether to show a badge on the banner.
 */
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
      {/* Background image */}
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
      {/* Overlay to darken the background image */}
      <div
        className={clsx(styles["banner-overlay"], classes?.bannerOverlay)}
      ></div>
      {/* Banner content container */}
      <Container
        className={clsx(styles["banner-content"], classes?.bannerContent)}
      >
        <Row className="justify-content-center">
          <Col sm={12}>
            {/* Optional badge */}
            {showBadge && <span className={styles["banner-badge"]}>Light</span>}
            {/* Title */}
            {title && (
              <h1
                className={clsx(styles["banner-title"], classes?.bannerTitle)}
              >
                {title}
              </h1>
            )}
            {/* Description */}
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
          {/* Action button */}
          {actionTitle && (
            <button
              className={clsx(
                styles["banner-action"],
                classes?.bannerAction,
                "justify-content-center"
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
