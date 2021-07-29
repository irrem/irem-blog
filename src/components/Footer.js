import React from "react";
import {
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMedium,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import PersonelLinks from "../constants/personalLinks";

function Footer() {
  return (
    <div className="footer">
        <h5>Hey there! I am coding this site with React! </h5>
        
        <a href={PersonelLinks.github} >
          <AiFillGithub />
        </a>
        <a href={PersonelLinks.linkedin}>
          <AiFillLinkedin />
        </a>
        <a href={PersonelLinks.instagram}>
          <AiOutlineInstagram />
        </a>
        <a href={"mailto:" + PersonelLinks.mail}>
          <AiOutlineMail />
        </a>
      </div>
  );
}

export default Footer;