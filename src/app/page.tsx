"use client";
import Banner from "@/app/components/Banner";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ListCards from "./components/ListCards/ListCards";
import Navigation from "./components/Navigation";
import styles from "./page.module.scss";

// eslint-disable-next-line react/jsx-key
const ComponentMap = new Map([["Category name1", <h1>Hello</h1>]]);

export default function Home() {
  const [key, setKey] = useState<string>("Category name1");
  return (
    <main>
      <Navigation.PrimaryNaviation
        menus={[
          { text: "Destination" },
          { text: "Food" },
          { text: "Well Being" },
          { text: "Sport" },
          { text: "Family" },
          { text: "LifeStyle" },
        ]}
      />
      <Banner
        key="banner"
        bgImageSrc="/assets/heroBg.jpeg"
        actionTitle="Start planning your trip"
        title="INSPIRATION FOR TRAVEL BY REAL PEOPLE"
        description="Book Smart, travel simple"
      />
      <section className="main-content">
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
        <span className={styles["destination"]}>
          <h1>Top Destinations</h1>
          <desc>
            Tick one more destination off of your bucket list with one of our
            most popular vacations in 2022
          </desc>
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
          activeTab={key}
          setActiveTab={setKey}
        />
        {key && ComponentMap.get(key)}
      </section>
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
    </main>
  );
}
