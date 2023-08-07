import {Link} from 'react-router-dom';
import MainImage from '../images/main_header.png';
import { links } from '../data';

const MainHeader = () => {

  const handleClick = (title) => {
    window.scrollTo(0, 0);
    document.title = title;
  }

  return (
    <header className="main-header">
      <div className="container main-header-container">
        <div className="main-header-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join The Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi maiores nobis loremque illo nisi porro!
          </p>
          <Link to="/plans" className='btn lg' onClick={() => handleClick(links[3].title)}>Get Started</Link>
        </div>
        <div className="main-header-right">
          <div className="main-header-circle"></div>
          <div className="main-header-image">
            <img src={MainImage} alt="A man jumping and having a basket ball with his hand" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
