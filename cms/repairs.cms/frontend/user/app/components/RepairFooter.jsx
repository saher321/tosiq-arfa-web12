import React from "react";
import { APP_NAME } from "../resources/strings";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Container } from "react-bootstrap";

const RepairFooter = () => {
  return (
    <footer>
      <Container fluid="md">
        <h2>{APP_NAME}</h2>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="copyright">
            &copy; Copyright &ndash; {new Date().getFullYear()}
          </div>
          <div className="social-icons">
            <div>
                <a href="#" target="_blank"> <FaFacebook size={24} /> </a>
            </div>
            <div>
                <a href="#" target="_blank"> <FaInstagram size={24} /> </a>
            </div>
            <div>
                <a href="#" target="_blank"> <FaTwitter size={24} /> </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default RepairFooter;
