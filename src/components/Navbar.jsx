import {useState} from 'react';
import { Link, NavLink } from "react-router-dom";
import {links} from '../data';
import {FaBars} from 'react-icons/fa';
import {AiTwotoneThunderbolt} from 'react-icons/ai';
import {MdOutlineClose} from 'react-icons/md';
import "./navbar.css";

const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

    const handleClick = () => {
      window.scrollTo(0, 0);
      setIsNavShowing(false);
    };

    const handleLinkClick = () => {
      window.scrollTo(0, 0);
      setIsNavShowing(prev => !prev);
    };

  return (
    <nav>
      <div className="container nav-container">
        <Link to="/" className="logo" onClick={handleClick}>
          <h1>FIT<span className="thunder"><AiTwotoneThunderbolt /></span><span>LANCE</span></h1>
        </Link>
        <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
            {
                links.map(({name, path}, index) => {
                    return (
                        <li key={index}>
                            <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={handleLinkClick}>{name}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
        <button className="nav-toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
