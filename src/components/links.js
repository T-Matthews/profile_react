import React from 'react';
import linkedin from "../static/linked-in.png"

let Links = () =>{

    return (
        <>
            <div className="links">
                    <div className="links-margin-left links-margin"></div>
                    <div className="links-area">
                        <div className="linkedin pro-link">
                            <a href='www.linkedin.com'>Linkedin</a>
                        </div>
                        <div className="github pro-link">
                            <img ></img>
                            <a href='www.linkedin.com' src={linkedin}></a>
                        </div>

                    </div>
                    <div className="links-margin-right links-margin"></div>

            </div>
            <div className="underline-center"/>
        </>
    )
}

export default Links