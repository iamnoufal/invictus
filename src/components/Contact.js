import iconGithub from "assets/images/icon_github.png";
import iconLinkedin from "assets/images/icon_linkedin.png";
import iconMail from "assets/images/icon_mail.png";
import iconWhatsapp from "assets/images/icon_whatsapp.png";
import iconInstagram from "assets/images/icon_instagram.png";
import "./Contact.css";

const Contact = ({ github, instagram, linkedin, whatsapp, mail }) => {
  return (
    <div className="d-flex m-auto text-center contact-list mt-1">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={iconGithub} alt="github icon" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={iconLinkedin} alt="linkedin icon" />
        </a>
      )}
      {mail && (
        <a href={`mailto:${mail}`} target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={iconMail} alt="mail icon" />
        </a>
      )}
      {whatsapp && (
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={iconWhatsapp} alt="whatsapp icon" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <img className="social-icon" src={iconInstagram} alt="instagram icon" />
        </a>
      )}
    </div>
  );
};

export default Contact;
