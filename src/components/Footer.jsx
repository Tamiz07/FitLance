import { Link } from "react-router-dom";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { links } from "../data";

const Footer = () => {
  const handleLinkClick = (title) => {
    window.scrollTo(0, 0);
    document.title = title;
  };

  return (
    <footer>
      <div className="container footer-container">
        <article>
          <Link
            to="/"
            className="logo"
            onClick={() => handleLinkClick(links[0].title)}
          >
            <h1>
              FIT
              <span className="thunder">
                <AiTwotoneThunderbolt />
              </span>
              <span>LANCE</span>
            </h1>
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint,
            eveniet. Fuga iste porro nam dolore cumque similique excepturi
            voluptatem possimus quam eligendi
          </p>
          <div className="footer-socials">
            <a
              className="linkedin"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              className="facebook"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              className="twitter"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              className="instagram"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>Permalinks</h4>
          <Link to="/about" onClick={() => handleLinkClick(links[1].title)}>
            About
          </Link>
          <Link to="/plans" onClick={() => handleLinkClick(links[3].title)}>
            Plans
          </Link>
          <Link to="/trainers" onClick={() => handleLinkClick(links[4].title)}>
            Trainers
          </Link>
          <Link to="/gallery" onClick={() => handleLinkClick(links[2].title)}>
            Gallery
          </Link>
          <Link to="/contact" onClick={() => handleLinkClick(links[5].title)}>
            Contact
          </Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/s" onClick={() => handleLinkClick("Blog - Fitlance")}>
            Blog
          </Link>
          <Link to="/s" onClick={() => handleLinkClick("Case Studies - Fitlance")}>
            Case Studies
          </Link>
          <Link to="/s" onClick={() => handleLinkClick("Events - Fitlance")}>
            Events
          </Link>
          <Link to="/s" onClick={() => handleLinkClick("Communities - Fitlance")}>
            Communities
          </Link>
          <Link to="/s" onClick={() => handleLinkClick("FAQs - Fitlance")}>
            FAQs
          </Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact" onClick={() => handleLinkClick(links[5].title)}>
            Contact Us
          </Link>
          <Link to="/s" onClick={() => handleLinkClick("Support - Fitlance")}>
            Support
          </Link>
        </article>
      </div>
      <div className="footer-copyright">
        <small>
          Copyright &copy; 2023 FitLance Studio. All Rights Reserved. Designed
          by <span>Tamizh Selvan</span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
