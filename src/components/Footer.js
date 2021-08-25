import wnkLogo from "assets/images/wnk-logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="py-5 mt-5 mx-5">
      <div className="row">
        <div className="col-3 contact-us-section">
          <h4 className="text-uppercase text-white">Contact us</h4>
          <p className="text-color-green">
            “Lorem ipsum dolor sit amet,”
          </p>
        </div>
        <div className="col-6"></div>
        <div className="col-3 text-end logo">
          <img src={wnkLogo} alt="wnk logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
