import React from 'react';
import linkedin from "../static/linked-in.png"
import github from "../static/github.png"


let Links = () =>{

    return (
        <>
            <div className="links">
                    <div className="links-margin-left links-margin"></div>
                    <div className="links-area">
                        <div className="linkedin pro-link">
                            <a href="https://www.linkedin.com/in/tyler-matthews-9b7128140/">
                                <img className='linkedin-image link-image' src={linkedin}/>
                            </a>
                        </div>
                        <div className="github pro-link">
                            <a href="https://github.com/T-Matthews">
                                <img className='github-image link-image' src={github}/>
                            </a>
                        </div>

                    </div>
                    <div className="links-margin-right links-margin"></div>

            </div>
            <div className="links-underline"/>
        </>
    )
}

export default Links