import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

const FAQ = (props) => {
  const [isAnswerShowing, setIsANswerShowing] = useState(false);

  return (
    <article className={`faq ${props.className}`} onClick={() => setIsANswerShowing(prev => !prev)}>
        <div>
            <h4>{props.question}</h4>
            <button className="faq-icon">
                {
                  isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
        </div>
        {isAnswerShowing && <p>{props.answer}</p>}
    </article>
  );
};

export default FAQ;