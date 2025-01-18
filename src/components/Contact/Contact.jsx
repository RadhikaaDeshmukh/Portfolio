import React from 'react'
import './Contact.css'
import email from '../../assets/email.svg'
import call_n from '../../assets/call_n.svg'
import location from '../../assets/location.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "df584208-5bf0-4feb-86c8-69611acc2ba1");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };
  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>

        </div>
        <div className='contact-section'>
            <div className="contact-left">
                <h1>Let"s Talk</h1>
                <p>Dignissimos suscipit hic ipsa provident reprehenderit commodi eaque inventore temporibus deserunt illum esse voluptate iusto cum voluptatum dolores, incidunt aliquam unde iure ab veniam consectetur nostrum! Temporibus.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={email} alt='' width={20}/> <p>hr@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={call_n} alt='' width={20}/> <p>+91 8899651252</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location} alt=''  width={20}/> <p>CA, United States</p>
                    </div>
                </div>
            </div>
                <form  onSubmit ={onSubmit} className="contact-right">
                    <label htmlFor=''> Name</label>
                    <input type='text' placeholder='Enter your Name'  name='name'/>
                    <label htmlFor=''> Email</label>
                    <input type='email' placeholder='Enter your email'  name='email'/>
                    <label htmlFor=''>Write your message are</label>
                   <textarea name='message' id='' rows='8' placeholder='Enter your message'></textarea>
                   <button type='submit' className='contact-submit'>Submit</button>

                </form>

        </div>
    </div>
  )
}

export default Contact
