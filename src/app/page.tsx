import Banner from "@/app/components/Banner";
import ListCards from "./components/ListCards/ListCards";
import styles from "./page.module.scss";

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
      </section>
      <section>Top Destination</section>
      <section>Blog Reads</section>
      <footer>footer</footer>
    </main>
  );
}
