import React from "react";
import "../styles/Footer.css";
import logo from "../images/logo.png";
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src={logo} alt="logo" />
          <p class="footer-company-name">BookRooms © 2020</p>
        </div>

        <div class="footer-center">
          <div>
            <p>
              <FaMapMarkerAlt /> 2912 WhiteField Bangalore,
              <span>India, 200042</span>
            </p>
          </div>

          <div>
            <p>
              <FaMobileAlt /> 310- 357-1334
            </p>
          </div>

          {/* <div>
            <p>
              <FaEnvelope />
              <a
                href="mailto:support@company.com"
                style={{ color: "darkgray" }}
              >
                support@bookrooms.com
              </a>
            </p>
          </div> */}
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>Connect With Us</span>
          </p>

          <div class="footer-icons">
            <a href="http://www.facebook.com">
              <FaFacebook />
            </a>
            <a href="http://www.twitter.com">
              <FaTwitter />
            </a>
            <a href="http://www.instagram.com">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
