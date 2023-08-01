import Image from '../images/values.jpg';
import SectionHead from '../UI/SectionHead';
import Card from '../UI/Card';
import { values } from '../data';
import { GiCutDiamond } from 'react-icons/gi';

const Values = () => {
  return (
    <section className="values">
        <div className="container values-container">
            <div className="values-left">
                <div className="values-image">
                    <img src={Image} alt="" />
                </div>
            </div>
            <div className="values-right">
                <SectionHead 
                    icon={<GiCutDiamond />}
                    title="Values"
                />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente, quisquam quas veritatis odit quae perferendis provident
                </p>
                <div className="values-wrapper">
                    {
                        values.map(value => {
                            return (
                                <Card className="values-value" key={value.id}>
                                    <span>{value.icon}</span>
                                    <h4>{value.title}</h4>
                                    <small>{value.desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  );
};

export default Values;