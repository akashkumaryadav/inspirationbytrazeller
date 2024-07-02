"use client"
import { Col, Row } from "react-bootstrap";
import { FaArrowUp, FaFacebookF, FaInstagram, FaPinterestP, FaTwitter, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Row className={styles["footer-content"]}>
        <Col md={6} sm={12}>
          <p className={styles["footer-brand"]}>
            Designed & Developed by <strong>XP DESIGN</strong>
          </p>
        </Col>
        <Col md={6} sm={12} className={styles.socialIcons}>
          <span>
            <FaFacebookF />
            <span>29</span>
          </span>
          <span>
            <FaTwitter />
            <span>70K</span>
          </span>
          <span>
            <FaInstagram />
            <span>40</span>
          </span>
          <span>
            <FaPinterestP />
            <span>13K</span>
          </span>
          <span>
            <FaYoutube />
            <span>168K</span>
          </span>
        </Col>
        <Col>
          <button
            className={styles["scrollTop"]}
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
            }}
          >
            <FaArrowUp />
          </button>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
