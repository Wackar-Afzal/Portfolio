
import React,{useState} from 'react';
import "./Contact.css";

  import { useRef } from 'react';
  import emailjs from '@emailjs/browser';

  function Contact(){
        const [input,setInput]=useState({
            name:"",
            email:"",
            subject:"",
            message:""
        });
        const [received, setReceived]=useState(false)
        
        function message(e){
    
            const inputName=e.target.name;
            const inputValue=e.target.value;
            setInput({...input,[inputName]:inputValue})
        }


        const form = useRef();
        const sendEmail = (e) => {
        e.preventDefault();
        if(input.name && input.email && input.subject && input.message){
            emailjs.sendForm('service_ql6p0wf', 'template_08e65lt', form.current, 'VKCZr65xbijix7UHx')
                   
            setInput({
                name:"",
                email:"",
                subject:"",
                message:""})
            
            setReceived(true)
        }
        }

    return(
        <div className='contact'>
        <header className="centerFlexV edu__header">
        <h1>Get in touch</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo ipsum impedit fuga voluptatibus accusantium odit corporis ducimus atque temporibus!</p>
        </header>

        <section className='bg-main Contact__section'>
            <div className='section__article'>
            <article className='bg-light form__article'>
            <center>
                <h2>Contact Me</h2>
            </center>
                <form ref={form} onSubmit={sendEmail} className="contact_box2_form">
                    <input type="text" name="name"  id="name"placeholder="Name" className="contact_box2_input bg-main" value={input.name} onChange={message} />
                    <input type="email"inputMode='email' name="email" id="email" placeholder="Your Email" className="contact_box2_input bg-main" value={input.email} onChange={message}/>
                    <input type="text" name="subject" id="subject" placeholder="Subject" className="contact_box2_input bg-main" value={input.subject} onChange={message}/>
                    <textarea id="message" name="message" rows="3" cols="12" placeholder="Enter your message here" className="contact_message_box bg-main" value={input.message} onChange={message}></textarea>
                    {received? <span style={{fontSize:"1rem", fontWeight:"lighter", textAlign:'center', paddingTop:"1rem"}}>Your message is received! </span>: null}

                    <button type="submit" id="suscribe" className="btn" value="Send">Send Message</button>
               </form>
        </article>
            </div>
            <div className='section__article'>
            <article className='bg-light info__article'>
            <center><h2 style={{marginBottom:"2rem"}}>Contact Information</h2></center>
            <div className='contact__info'>
                <p>Country</p><p>Pakistan</p>
                <p>City</p><p>Islamabad</p>
                <p>Email</p><a href="mailto:info@fori.co">wackar.afzal@gmail.com</a>
                <p>Phone #</p><a href="tel:+1 914 4165380">+92 310 4098322</a>
                <p>WhatsApp</p><p className='color-sec'>+92 332 4166964</p>
            </div>
        </article>
            </div>
       
      </section>
      </div>
    )
  }
  export default Contact;
