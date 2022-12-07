import React from 'react';
import previous_pic from "../static/previous_pic.jpg";
import Links from "../components/links";

let Previouswork = () =>{

    return (
        <>
            <div id='previous'>
                <div className="previous-text-area">
                    <div className="contact-text">
                        <h3 className="contact-header">I've done other things!</h3>
                        <h4 className="contact-text-content">Prior to learning to code,
                        I worked as a Materials and QA/QC Manager overseeing a large power
                        line reconstruction project. It was excellent experience in dealing with
                        pressure from all sides, managing others, developing a critical eye, and 
                        constant practice with problem solving skills. Plus I got to fly in helicopters!
                        <br/>
                        <br/>
                        Before that, I worked in Seattle, WA designing shoring 
                        systems for deep excavations, mainly sheet pile walls for environmental excavations.
                        <br/>
                        <br/>
                        I hold a Master's Degree in Geotechnical Engineering from the University of Washington, and a 
                        Bachelor's Degree in Civil Engineering from the University of Portland.
                        </h4>
                        
                    </div>
                </div>
                <div className="previous-image">
                    <img className="image" id="contact-pic" src={previous_pic}/>
                </div>
            </div>
            <div className='banner-space'/>
            <div className="underline-center"/> 
        </>
    )
}

export default Previouswork