import wnkLogo from "assets/images/wnk-logo.png";

import "./Footer.css";

const Footer = () => {
  let contact_url="mailto:21f1005287@student.onlinedegree.iitm.ac.in"
  return (
    <footer className="py-5 mt-5 px-5 ">
      <hr className="line" />
      <div className="row">
        <div className="col-3 contact-us-section">
          <h4 className="text-uppercase text-white">Contact us</h4>
          <p className="text-color-green">
            <a href={contact_url}>Noufal Rahman</a>
          </p>
        </div>
        <div className="col-3 text-end logo">
          <img src={wnkLogo} alt="wnk logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
