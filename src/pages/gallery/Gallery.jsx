import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_3.jpg';
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
                <article key={index}>
                  <img src={image} alt="" />
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
