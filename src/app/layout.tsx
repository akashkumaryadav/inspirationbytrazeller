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
      <head>
        <link href="https://db.onlinewebfonts.com/c/23c0fcab84d99da0de762de7e220a6e1?family=Europa+Regular" rel="stylesheet"></link>
        <link href="https://db.onlinewebfonts.com/c/d3bfee78e8ead45d9057a95bb6ff5de8?family=Europa-Bold" rel="stylesheet"></link>
      </head>
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
