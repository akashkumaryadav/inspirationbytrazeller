"use client";
import { DestinationCard } from "@/app/components/DestinationCard";
import { Modal } from "./model";

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

export default function PhotoModal({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <Modal>
      <DestinationCard
        {...defaultParams}
        imageSrc={`/assets/destination${slug}.jpeg`}
      />
    </Modal>
  );
}
