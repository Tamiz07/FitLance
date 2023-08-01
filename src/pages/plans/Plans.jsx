import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_4.jpg';
import  Card from '../../UI/Card';
import { plans } from "../../data";
import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header
        image={HeaderImage}
        title="Membership Plan"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odit iste facere ex, impedit, voluptas" 
      />

      <section className="plans">
        <div className="container plans-container">
          {
            plans.map(plan => {
              return (
                <Card key={plan.id} className="plan">
                  <h3>{plan.name}</h3>
                  <small>{plan.desc}</small>
                  <h1>{`$${plan.price}`}</h1><h2>/mo</h2>
                  <h4>Features</h4>
                  {
                    plan.features.map(({feature, available}, index) =>
                    {
                      return (
                        <p key={index} className={!available ? 'disabled' : ''}>{feature}</p>
                      )
                    })
                  }
                  <button className="btn lg">Choose Plan</button>
                </Card>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Plans;
