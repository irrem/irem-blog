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
       {/* <h5>Hey there! I am coding this site with React! </h5>*/}
        
        <a href={PersonelLinks.github} target="_blank" rel="noreferrer noopener" >
          <AiFillGithub />
        </a>
        <a href={PersonelLinks.linkedin} target="_blank" rel="noreferrer noopener">
          <AiFillLinkedin />
        </a>
        <a href={PersonelLinks.instagram} target="_blank" rel="noreferrer noopener">
          <AiOutlineInstagram />
        </a>
        <a href={"mailto:" + PersonelLinks.mail} target="_blank" rel="noreferrer noopener">
          <AiOutlineMail />
        </a>
      </div>
  );
}

export default Footer;