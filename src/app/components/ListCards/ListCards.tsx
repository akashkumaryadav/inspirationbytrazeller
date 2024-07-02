"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DestinationCard } from "@/app/components/DestinationCard";
import styles from "./listcards.module.scss";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

/**
 * Sample data for the destination cards.
 * Each card contains information such as image, tags, title, author, date, shares, description, and href.
 */
const cardsData = [
  {
    imageSrc: "/assets/destination4.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/1",
  },
  {
    imageSrc: "/assets/destination1.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",

    href: "/destination/1",
  },

  {
    imageSrc: "/assets/destination2.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",

    href: "/destination/1",
  },

  {
    imageSrc: "/assets/destination3.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/3",
  },

  {
    imageSrc: "/assets/destination6.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/3",
  },

  {
    imageSrc: "/assets/destination7.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/3",
  },

  {
    imageSrc: "/assets/destination8.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",

    href: "/destination/3",
  },

  {
    imageSrc: "/assets/destination9.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/3",
  },

  {
    imageSrc: "/assets/destination3.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    href: "/destination/3",
  },
];

/**
 * ListCards component renders a list of DestinationCard components.
 *
 * - The card data is mapped from the cardsData array.
 * - Each card is displayed within a Bootstrap column for a responsive layout.
 * - A "Load More" button is provided to load more cards (currently non-functional).
 *
 * @returns {JSX.Element} The rendered ListCards component.
 */
const ListCards: React.FC = (): JSX.Element => {
  return (
    <Container className={styles.listCards}>
      <Row className="d-flex w-100 justify-content-end align-items-center">
        <Col className={styles.socialIcons}>
          <span>
            <FaFacebookF />
            <span>29M</span>
          </span>
          <span>
            <FaTwitter />
            <span>70K</span>
          </span>
          <span>
            <FaInstagram />
            <span>40M</span>
          </span>
          <span>
            <FaYoutube />
            <span>168K</span>
          </span>
        </Col>
      </Row>
      <Row>
        {cardsData.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <DestinationCard {...card} />
          </Col>
        ))}
      </Row>
      <div className={styles.loadMoreContainer}>
        <Button variant="light" className={styles.loadMoreButton}>
          Load More
        </Button>
      </div>
    </Container>
  );
};

export default ListCards;
