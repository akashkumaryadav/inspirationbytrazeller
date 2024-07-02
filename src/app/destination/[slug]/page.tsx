"use client";

import { DestinationCard } from "@/app/components/DestinationCard";
import { usePathname } from "next/navigation";
import { Container } from "react-bootstrap";

const defaultParams = {
  imageSrc: "/assets/destination4.jpeg",
  tags: ["Aenean Eleifend", "Aliquam"],
  title: "Integer Maecenas Eget Viverra",
  author: "Joanna Wellick",
  date: "June 28, 2018",
  shares: 1000,
  description:
    "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.",
  href: "/",
};

export default function Paget() {
  const pathname = usePathname();
  return (
    <Container className="pt-5">
      <DestinationCard
        {...defaultParams}
        imageSrc={`/assets/destination${pathname.split("/")?.at(-1)}.jpeg`}
      />
    </Container>
  );
}
