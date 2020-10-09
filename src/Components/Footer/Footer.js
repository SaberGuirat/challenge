import React from "react";
import { FaReact } from "react-icons/fa";

const Footer = () => (
  <>
    <footer
      className="fixed-bottom text-center"
      style={{ backgroundColor: "#343a40", color: "#fff" }}
    >
      <span className="navbar-brand">Challenge</span>
      <FaReact color="white" size="2em" />
    </footer>
  </>
);

export default Footer;
