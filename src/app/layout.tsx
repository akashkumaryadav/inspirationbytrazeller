import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Inspiration By Trazler",
  description: "Inspiration for Travel By Real People",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className="root">
        <Navigation.PrimaryNaviation
          menus={[
            { text: "Home", href: "/" },
            { text: "Destination", href: "#destination" },
            { text: "Food" },
            { text: "Well Being" },
            { text: "Sport", href: "#main-content" },
            { text: "Family" },
            { text: "LifeStyle", href: "#blog-read" },
          ]}
        />
        <div id="modal-root" />
        {props.modal}
        {props.children}
      </body>
    </html>
  );
}
