import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';

import { FaRegComments } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import styles from './styles.module.scss';

const Navigation = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        className={styles.navbarContainer}
      >
        <Container className={styles.navContainer}>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} className={styles.logoImg} />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className={styles.toggleBtn}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={styles.navbarCollapse}
          >
            <Nav className="me-auto">
              <Nav.Link href="#home" className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" className={styles.navLink}>
                About
              </Nav.Link>
              <Nav.Link href="#services" className={styles.navLink}>
                Services
              </Nav.Link>
              <Nav.Link href="#blog" className={styles.navLink}>
                Blog
              </Nav.Link>
              <Nav.Link href="#contact" className={styles.navLink}>
                Contact
              </Nav.Link>
            </Nav>
            <div>
              <i className={styles.searchIcon}>
                <BiSearch />
              </i>
            </div>
            <div className={styles.navBtnDiv}>
              <div className={styles.navBtn}>
                <i className={styles.btnIcon}>
                  <FaRegComments />
                </i>
                <p className={styles.btnText}>
                  Call us at
                  <br />
                  189 -2568-987
                </p>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
