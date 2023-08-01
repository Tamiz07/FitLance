import SectionHead from "../UI/SectionHead";
import { FaQuestion } from "react-icons/fa";
import FAQ from '../UI/FAQ';
import { faqs } from "../data";
import '../pages/home/home.css';

const FAQs = () => {
  return (
    <section className="faqs">
        <div className="container faqs-container">
            <SectionHead 
                icon={<FaQuestion />}
                title="FAQs"
            />
            <div className="faqs-wrapper">
                {
                    faqs.map(faq => {
                        return (
                            <FAQ 
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  );
};

export default FAQs;