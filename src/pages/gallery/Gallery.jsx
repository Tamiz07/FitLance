import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_3.jpg';
import {AiTwotoneThunderbolt} from 'react-icons/ai';
import "./gallery.css";

const Gallery = () => {
  const galleryLength = 12;
  const images = []

  for (let i = 1; i <= galleryLength; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header 
        image={HeaderImage}
        title="Our Gallery"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odit iste facere ex, impedit, voluptas"
      />
      <section className="gallery">
        <div className="container gallery-container">
          {
            images.map((image, index) => {
              return (
                <article key={index} className="article">
                  <img src={image} alt="" />
                  <div className="overlay">
                    <h4 className="logo-text">FIT<span className="thunder"><AiTwotoneThunderbolt /></span><span>LANCE</span></h4>
                  </div>
                </article>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;
