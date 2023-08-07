import {useState} from 'react';
import Header from "../../components/Header";
import HeaderImage from '../../images/header_bg_2.jpg';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState(
    {
      name: "",
      email: "",
      phone: "+91",
      comments: ""
    }
  )

  function handleChange (event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit (event) {
    event.preventDefault()
  }

  return (
    <>
      <Header
        image={HeaderImage}
        title="Get In Touch"
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi odit iste facere ex, impedit, voluptas"
      />
      <section className="contact">
        <div className="container contact-container">
          <div className="contact-wrapper">
            <a href="mailto:tamizh6946@gmail.com"><MdEmail /></a>
            <a href="https://m.me/tamizh7"><BsMessenger /></a>
            <a href="https://wa.me/+916383033772"><IoLogoWhatsapp /></a>
          </div>
          <div className="form-container">
            <h2>Enquire now</h2>
            <form onSubmit={handleSubmit} method="post">
              <input type="text" placeholder="name*" onChange={handleChange} name="name" value={formData.name}/>
              <input type="email" placeholder="email*" onChange={handleChange} name="email" value={formData.email}/>
              <input type="phone" placeholder="+91" onChange={handleChange} name="phone" value={formData.phone}/>
              <textarea placeholder="Detail Message" onChange={handleChange} name="comments" value={formData.comments}/>
              <button>Enquire</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
