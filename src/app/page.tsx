"use client";
import Banner from "@/app/components/Banner";
import { Col, Row } from "react-bootstrap";
import { BlogPost } from "./components/BlogPost";
import { Footer } from "./components/Footer";
import ListCards from "./components/ListCards/ListCards";
import Navigation from "./components/Navigation";
import styles from "./page.module.scss";

const mainImage = "/assets/destination8.jpeg";
const mainTitle =
  "Tick one more destination off of your bucket list with one of our most popular vacations in 2022";
const mainDate = "1 Month Ago";
const mainSummary =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet nibh id iaculis pharetra. Maecenas eleifend sed ex. Donec quis magna sed felis elementum blandit nec quis sem.";

const relatedPosts = [
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
];

const ComponentMap = new Map([
  [
    "Category name1",
    <BlogPost
      id="blog-read"
      key={mainTitle}
      mainTitle={mainTitle}
      mainImage={mainImage}
      mainDate={mainDate}
      mainSummary={mainSummary}
      relatedPosts={relatedPosts}
    />,
  ],
]);

export default function Home() {
  return (
    <main>
      <Banner
        key="banner"
        bgImageSrc="/assets/heroBg.jpeg"
        actionTitle="Start planning your trip"
        title="INSPIRATION FOR TRAVEL BY REAL PEOPLE"
        description="Book Smart, travel simple"
      />
      <section className="main-content" id="main-content">
        <ListCards />
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
        <span className={styles["destination"]} id="destination">
          <h1>Top Destinations</h1>
          <span>
            Tick one more destination off of your bucket list with one of our
            most popular vacations in 2022
          </span>
          <span>
            <Row className={styles["banner-cards-container"]}>
              {Array.from({ length: 5 }).map((_, index) => (
                <Col key={`destination-${index}`} xl={2} lg={6} md={6} sm={6}>
                  <Banner
                    title="Dominian Republic"
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
        <Navigation.SecondaryNavigation
          tabs={[
            {
              title: "Category name",
            },
            {
              title: "Category name",
            },
            {
              title: "Category name",
            },
            {
              title: "Category name",
            },
            {
              title: "Category name",
            },
          ]}
          componentMap={ComponentMap}
        />
      </section>
      <Footer />
    </main>
  );
}
