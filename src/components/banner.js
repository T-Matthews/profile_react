import React from 'react';
import profile_pic from "../static/profile_pic.jpg";

let Banner = () =>{

    return (
        <>
            <div id='banner'>
                <div className="banner-text-area">
                    <div className="banner-text">
                        <h3 className="banner-text-p">Hello World!</h3>
                        <h4 className="banner-text-p">I'm a Full Stack developer based in Denver, CO, who is looking
                            to contribute to an innovative and passionate team! In 
                            addition to a strong technical background, I have a drive 
                            to continue learning, improving, and making the web a better 
                            place.
                        </h4>
                        <h4 className="banner-text-p">Through previous endeavors I have developed an organized and 
                            proactive approach to my work. I really enjoy working with others
                            and always aim to optimize and improve my applications.
                        </h4>
                        <h4 className="banner-text-p">Outside of development, I love playing/watching sports,
                            traveling, and board-game night. I play trombone, guitar, and piano, and can't wait for the 
                            World Cup! 
                        </h4>
                    </div>
                
                </div>
                <div className="banner-image">
                    <img className="image" id="profile-pic" src={profile_pic}/>
                </div>
            </div>
            <div className='banner-space'/>
            <div className="underline-center"/> 
        </>
    )
}

export default Banner