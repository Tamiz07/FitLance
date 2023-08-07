import {Link} from 'react-router-dom';
import { links } from '../../data';
import "./notFound.css";

const NotFound = () => {

  const handleClick = (title) => {
    window.scrollTo(0, 0);
    document.title = title;
  }

  return (
    <section className="notfound">
      <div className="container notfound-container">
        <h2>Page Not Found</h2>
        <Link to="/" className='btn' onClick={() => handleClick(links[0].title)}>Go Back Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
