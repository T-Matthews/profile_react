import React from 'react';
import contact_pic from "../static/contact_pic.jpg";
import Links from "../components/links";

let ContactMe = () =>{

    return (
        <>
            <div id='contact'>
                <div className="contact-text-area">
                    <div className="contact-text">
                        <h3 className="contact-header">GET IN TOUCH!</h3>
                        <h4 className="contact-text-content">Thank you for taking the 
                            time to look through my personal site. If you have any 
                            comments, questions, or just want to get in touch, 
                            please see the 
                            <a className="email-link" 
                                href='https://www.linkedin.com/in/tyler-matthews-9b7128140/'>
                                {` LinkedIn`}</a> / <a className="email-link" 
                                href='https://github.com/T-Matthews'> {`Github `}</a> 
                                links below! Additionally, you can get ahold of me 
                                by email at <a className="email-link" 
                                href='mailto:tyler.matthews.tjm@gmail.com'>
                                tyler.matthews.tjm@gmail.com
                            </a>.
                        </h4>
                        
                    </div>
                    <div className='banner-space'/>
                <div className="underline-center"/>
                <Links/>
                </div>
                <div className="contact-image">
                    <img className="image" id="contact-pic" src={contact_pic}/>
                </div>
            </div>
            <div className='banner-space'/>
            <div className="underline-center"/> 
        </>
    )
}

export default ContactMe