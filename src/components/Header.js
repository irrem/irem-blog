import { Link } from "react-router-dom";
import PersonalLinks from "../constants/personalLinks";


function Header() {
  return (
    <nav>
      <div>
      
        <div className="header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/portfolio" >Portfolio</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <a href={"mailto:" + PersonalLinks.mail}>Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
