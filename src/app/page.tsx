"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import Banner from "@/app/components/Banner";
import { BlogPost } from "@/app/components/BlogPost";
import { Footer } from "@/app/components/Footer";
import ListCards from "@/app/components/ListCards/ListCards";
import Navigation from "@/app/components/Navigation";
import styles from "@/app/page.module.scss";

// Define types for the data structure
type Post = {
  title: string;
  date: string;
  image: string;
};

type Destination = {
  title: string;
};

// Main content data
const mainContent = {
  mainImage: "/assets/destination8.jpeg",
  mainTitle:
    "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
  mainDate: "1 Month Ago",
  mainSummary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem.",
  relatedPosts: [
    {
      title: "Akame Ga Kill: Season finale",
      date: "21 March 2021",
      image: "/assets/read1.png",
    },
    {
      title: "Naruto Uzumaki: Hidden Village",
      date: "21 March 2021",
      image: "/assets/read2.jpeg",
    },
    {
      title: "Love juice Season Premiere",
      date: "21 March 2021",
      image: "/assets/read3.jpeg",
    },
    {
      title: "Love juice Season Premiere",
      date: "21 March 2021",
      image: "/assets/read4.jpeg",
    },
  ] as Post[],
  mangaPosts: [
    {
      title:
        "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
      date: "21 March 2021",
      image: "/assets/manga1.jpeg",
    },
    {
      title:
        "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
      date: "21 March 2021",
      image: "/assets/manga2.jpeg",
    },
    {
      title:
        "Tick one more destination off of your bucket list with one of our most popular vacations in 2022",
      date: "21 March 2021",
      image: "/assets/manga3.jpeg",
    },
  ] as Post[],
  topDestinations: [
    { title: "Dominican Republic" },
    { title: "Maecenas Tincidunt" },
    { title: "Dominican Republic" },
    { title: "Dominican Republic" },
    { title: "Dominican Republic" },
  ] as Destination[],
};

// Component map for navigation
const ComponentMap = new Map([
  [
    "Category name1",
    <BlogPost
      key={mainContent.mainTitle}
      mainTitle={mainContent.mainTitle}
      mainImage={mainContent.mainImage}
      mainDate={mainContent.mainDate}
      mainSummary={mainContent.mainSummary}
      relatedPosts={mainContent.relatedPosts}
      mangaPosts={mainContent.mangaPosts}
    />,
  ],
]);

const Home: React.FC = () => {
  return (
    <main>
      {/* Main banner section */}
      <Banner
        key="banner"
        bgImageSrc="/assets/heroBg.jpeg"
        actionTitle="Start planning your trip"
        title="INSPIRATION FOR TRAVEL BY REAL PEOPLE"
        description="Book Smart, travel simple"
      />

      {/* Main content section */}
      <section className="main-content" id="main-content">
        {/* List of cards section */}
        <ListCards />

        {/* Secondary banner section */}
        <Banner
          key="secondary-banner"
          showBadge
          className={styles["second-banner"]}
          classes={{
            bannerOverlay: styles["second-banner-overlay"],
            bannerAction: styles["second-banner-action"],
            bannerDescription: styles["second-banner-description"],
            bannerTitle: styles["second-banner-title"],
          }}
          bgImageSrc="/assets/heroBg2.jpeg"
          actionTitle="Start planning your trip"
          title="Richird Norton photorealistic rendering as real photos"
          description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />

        {/* Top destinations section */}
        <span className={styles["destination"]} id="destination">
          <h1>Top Destinations</h1>
          <span>
            Tick one more destination off of your bucket list with one of our
            most popular vacations in 2022
          </span>
          <span>
            {/* Top destinations cards */}
            <Row className={styles["banner-cards-container"]}>
              {mainContent.topDestinations.map((destination, index) => (
                <Col key={`destination-${index}`} xl={2} lg={6} md={6} sm={6}>
                  <Banner
                    title={destination.title}
                    className={styles["banner-card"]}
                    key={`destination-${index}`}
                    bgImageSrc={`/assets/destination${index + 1}.jpeg`}
                    classes={{
                      bannerTitle: styles["banner-card-title"],
                    }}
                  />
                </Col>
              ))}
            </Row>
          </span>
        </span>

        {/* Secondary navigation with mapped components */}
        <Navigation.SecondaryNavigation
          tabs={[
            { title: "Category name" },
            { title: "Category name" },
            { title: "Category name" },
            { title: "Category name" },
            { title: "Category name" },
          ]}
          componentMap={ComponentMap}
        />
      </section>

      {/* Footer section */}
      <Footer />
    </main>
  );
};

export default Home;
