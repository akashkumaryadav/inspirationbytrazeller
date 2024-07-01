import Banner from "@/app/components/Banner";
import ListCards from "./components/ListCards/ListCards";
import styles from "./page.module.scss";
import { Col, Row } from "react-bootstrap";

export default function Home() {
  return (
    <main>
      <Banner
        bgImageSrc="/assets/heroBg.jpeg"
        actionTitle="Start planning your trip"
        title="INSPIRATION FOR TRAVEL BY REAL PEOPLE"
        description="Book Smart, travel simple"
      />
      <section className="main-content">
        <ListCards />
        <Banner
          showBadge
          className={styles["second-banner"]}
          classes={{
            bannerOverlay: styles["second-banner-overlay"],
            bannerAction: styles["second-banner-action"],
            bannerDescription: styles["second-banner-description"],
          }}
          bgImageSrc="/assets/heroBg2.jpeg"
          actionTitle="Start planning your trip"
          title="Richird Norton photorealistic rendering as real photos"
          description="Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
        />
        <span>
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
                      bannerTitle:styles["banner-card-title"]
                    }}
                  />
                </Col>
              ))}
            </Row>
          </span>
        </span>
      </section>
      <section>
        
      </section>
      <footer>footer</footer>
    </main>
  );
}
