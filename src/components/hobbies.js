import React from 'react';
import hobbies_pic from "../static/hobbies_pic.jpg";
import Links from "../components/links";

let HobbyComp = () =>{

    return (
        <>
            <div id='hobbies'>
                <div className="hobbies-text-area">
                   
                    <div className='hobby-item'>
                        <div className='hobby-item-title'>
                            <h4>
                                Board Games
                            </h4>
                            <div className="underline-hobby-center"/> 
                        </div>
                        <div className='hobby-item-body'>
                            <img className="hobbies-item-pic" id="" src={"https://www.catan.com/sites/default/files/2021-06/dye_catan_150407_0564.jpg"}/>
                            <h5 className='hobbies-item-text'>
                                I regularly try getting folks together for some favorites, such as
                                (in no particular order):
                                <ul className='hobby-list mt-2'>
                                    <li className='hobby-list-item'>Blood on the Clocktower</li>
                                    <li className='hobby-list-item'>Gloomhaven</li>
                                    <li className='hobby-list-item'>Secret Hitler</li>
                                    <li className='hobby-list-item'>7 Wonders: Duel</li>
                                    <li className='hobby-list-item'>Dominion</li>
                                </ul>
                            </h5>
                        </div>
                    </div>
                    <div className='hobbies-space'/>
                    <div className='hobby-item'>
                        <div className='hobby-item-title'>
                            <h4>
                                Playing / Watching Sports
                            </h4>
                            <div className="underline-hobby-center"/> 
                        </div>
                        <div className='hobby-item-body'>
                            <img className="hobbies-item-pic" id="" src={"https://pbs.twimg.com/media/Fcu7lf3WIAMQWk8?format=jpg&name=small"}/>
                            <h5 className='hobbies-item-text'>
                                I am mostly playing volleyball these days, but 
                                would love to get back into soccer, and enjoyed watching the world cup!
                                I regularly watch the English Championship side Swansea City, and 
                                hope to visit Wales for a game in my lifetime.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="hobbies-image">
                    <img className="image" id="hobbies-pic" src={hobbies_pic}/>
                </div>
            </div>
            <div className="underline-center"/> 
            <Links/>
        </>
    )
}

export default HobbyComp