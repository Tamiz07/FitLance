import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import "./about.css";

const About = () => {
  return (
    <>
      <Header
        image={HeaderImage}
        title="About Us"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odit iste facere ex, impedit, voluptas"
      />

      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-image-section">
            <img src={StoryImage} alt="" />
          </div>
          <div className="about-content-section">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores iusto sint quo neque corporis, quisquam nam rem fugit doloribus, voluptatum est eveniet similique fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur modi unde, libero quidem omnis voluptates accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aliquam nemo fugit voluptatem cupiditate.
            </p>
          </div>
        </div>
      </section>

      <section className="about-vision">
        <div className="container about-vision-container">
          <div className="about-content-section">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores iusto sint quo neque corporis, quisquam nam rem fugit doloribus, voluptatum est eveniet similique fugiat dolore expedita voluptates id nihil!
              Fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur modi unde, libero quidem omnis voluptates accusamus temporibus repellendus.
            </p>
          </div>
          <div className="about-image-section">
            <img src={VisionImage} alt="" />
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="container about-mission-container">
          <div className="about-image-section">
            <img src={MissionImage} alt="" />
          </div>
          <div className="about-content-section">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores iusto sint quo neque corporis, quisquam nam rem fugit doloribus, voluptatum est eveniet similique fugiat.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consectetur modi unde, libero quidem omnis voluptates accusamus.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aliquam nemo fugit voluptatem cupiditate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
