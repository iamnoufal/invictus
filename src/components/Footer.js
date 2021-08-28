import wnkLogo from "assets/images/wnk-logo.png";

import "./Footer.css";
import instaIcon from "assets/images/icon_insta.png";
import youtubeIcon from "assets/images/icon_youtube.png";

const Footer = () => {
  const contact_url = "mailto:21f1005287@student.onlinedegree.iitm.ac.in";
  return (
    <footer className="py-5 mt-5 px-5 ">
      <hr className="line" />
      <div className="row">
        <div className="col-6 contact-us-section">
          <h4 className="text-uppercase text-white heading fs-5">Contact us</h4>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item bg-transparent border-0 px-0">
              <a
                href="https://www.instagram.com/invictus_iitm/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instaIcon} alt="instagram icon" />
              </a>
            </li>
            <li className="list-group-item bg-transparent border-0 px-0">
              <a
                href="https://www.youtube.com/channel/UCax6gDzWhjc1177nGU2A_Ew"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtubeIcon} alt="youtube icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 text-end logo">
          <img src={wnkLogo} alt="wnk logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
