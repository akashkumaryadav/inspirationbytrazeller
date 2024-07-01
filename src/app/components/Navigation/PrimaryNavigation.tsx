import Image from "next/image";
import { Button, Form, Nav, Navbar } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import styles from "./navigation.module.scss";

const PrimaryNaviation: React.FC<{
  menus: Array<{ href?: string; text: string }>;
}> = ({ menus }) => {
  return (
    <Navbar expand="lg" className={styles.navbar}>
      <Navbar.Brand href="#home" className={styles.brand}>
        <Image src="/assets/logo.svg" alt="alt" width={360} height={49} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
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
        <Form className="d-flex justify-content-center align-items-center mx-4">
          <FaMagnifyingGlass size={24} color="white" />
        </Form>
        <Button variant="dark" className={styles.giftButton}>
          GET YOUR 120$ CHRISTMAS GIFT
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PrimaryNaviation;
