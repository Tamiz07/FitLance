import { Link } from "react-router-dom";
import { AiTwotoneThunderbolt } from 'react-icons/ai';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };
  return (
    <footer>
        <div className="container footer-container">
            <article>
                <Link to="/" className="logo" onClick={handleLinkClick}>
                    <h1>FIT<span className="thunder"><AiTwotoneThunderbolt /></span><span>LANCE</span></h1>
                </Link>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, eveniet. Fuga iste porro nam dolore cumque similique excepturi voluptatem possimus quam eligendi
                </p>
                <div className="footer-socials">
                    <a className="linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><FaLinkedin /></a>
                    <a className="facebook" href="https://facebook.com" target="_blank" rel="noreferrer noopener"><FaFacebookF /></a>
                    <a className="twitter" href="https://twitter.com" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter /></a>
                    <a className="instagram" href="https://instagram.com" target="_blank" rel="noreferrer noopener"><AiFillInstagram /></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/plans" onClick={handleLinkClick}>Plans</Link>
                <Link to="/trainers" onClick={handleLinkClick}>Trainers</Link>
                <Link to="/gallery" onClick={handleLinkClick}>Gallery</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link to="/s" onClick={handleLinkClick}>Blog</Link>
                <Link to="/s" onClick={handleLinkClick}>Case Studies</Link>
                <Link to="/s" onClick={handleLinkClick}>Events</Link>
                <Link to="/s" onClick={handleLinkClick}>Communities</Link>
                <Link to="/s" onClick={handleLinkClick}>FAQs</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                <Link to="/s" onClick={handleLinkClick}>Support</Link>
            </article>
        </div>
        <div className="footer-copyright">
            <small>Copyright &copy; 2023 FitLance Studio. All Rights Reserved. Designed by <span>Tamizh Selvan</span></small>
        </div>
    </footer>
  );
};

export default Footer;

