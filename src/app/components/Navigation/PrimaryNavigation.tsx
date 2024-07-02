"use client";
import Image from "next/image";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./navigation.module.scss";

/**
 * PrimaryNaviation component renders the primary navigation bar of the website.
 *
 * @param {Array<{ href?: string; text: string }>} menus - Array of menu items for the navigation bar.
 * @returns {JSX.Element} The rendered PrimaryNaviation component.
 */
const PrimaryNaviation: React.FC<{
  menus: Array<{ href?: string; text: string }>;
}> = ({ menus }) => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      {/* Brand Logo */}
      <Navbar.Brand href="/" className={styles.brand}>
        <Image src="/assets/logo.svg" alt="alt" width={360} height={49} />
      </Navbar.Brand>
      {/* Navbar Toggle Button for Small Screens */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Navbar Collapsible Content */}
      <Navbar.Collapse id="basic-navbar-nav">
        {/* Navigation Links */}
        <Nav className="me-auto d-flex justify-content-center align-items-center">
          {menus?.map((menu) => (
            <Nav.Link
              key={menu?.text}
              href={menu?.href}
              className={styles.navLink}
            >
              {menu?.text}
            </Nav.Link>
          ))}
        </Nav>
        {/* Search Icon */}
        <Form className="d-flex justify-content-center align-items-center mx-4">
          <FaMagnifyingGlass size={24} color="white" />
        </Form>
        {/* Christmas Gift Button */}
        <Button variant="dark" className={styles.giftButton}>
          GET YOUR 120$ CHRISTMAS GIFT
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryNaviation;
