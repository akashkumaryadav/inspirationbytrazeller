"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { DestinationCard } from "@/app/components/DestinationCard";
import styles from "./listcards.module.scss";

const cardsData = [
  // Add your card data here
  {
    imageSrc: "/assets/destination4.jpeg",
    tags: ["Aenean Eleifend", "Aliquam"],
    title: "Integer Maecenas Eget Viverra",
    author: "Joanna Wellick",
    date: "June 28, 2018",
    shares: 1000,
    description:
      "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
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
    onViewPost: () => console.log("View post clicked 1"),
  },
];

const ListCards: React.FC = () => {
  return (
    <Container className={styles.listCards}>
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
