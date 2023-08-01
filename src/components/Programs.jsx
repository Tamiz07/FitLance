import { FaCrown } from "react-icons/fa";
import { programs } from "../data";
import SectionHead from "../UI/SectionHead";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHead 
          icon={<FaCrown />}
          title="Programs"
        />
        <div className="programs-wrapper">
          {programs.map(card => {
            return (
              <Card className="programs-program" key={card.id}>
                <span>{card.icon}</span>
                <h4>{card.title}</h4>
                <small>{card.info}</small>
                <Link to={card.path} className="btn sm">Learn More <AiFillCaretRight /></Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
