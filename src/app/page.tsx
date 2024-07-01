import Banner from "@/app/components/Banner";
import { Col, Container, Row } from "react-bootstrap";
import ListCards from "./components/ListCards/ListCards";

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
          height={600}
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
