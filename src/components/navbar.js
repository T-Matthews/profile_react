import React from 'react';

let Navbar = () =>{

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <a className="nav-item nav-item-l" id="nav-name" href="#">Tyler Matthews</a>
                </div>
                <div className="navbar-right">
                    <a className="nav-item nav-item-r" id="nav-projects" href="#">Projects</a>
                    <a className="nav-item nav-item-r" id="nav-previous" href="#">Previous Work</a>
                    <a className="nav-item nav-item-r" id="nav-hobbies" href="#">Hobbies</a>
                    <a className="nav-item nav-item-r" id="nav-contact" href="#">Contact</a>
                </div>
            </div>
            <div className="underline">
                <div className="underline-l"></div>
                <div className="underline-r"></div>
            </div>
        </>
    )
}

export default Navbar