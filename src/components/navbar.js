import React from 'react';

let Navbar = () =>{

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <a className="nav-item nav-item-l" id="nav-name" href="/">Tyler Matthews</a>
                </div>
                <div className="navbar-right">
                    <a className="nav-item nav-item-r" id="nav-projects" href="/projects">Projects</a>
                    <a className="nav-item nav-item-r" id="nav-previous" href="/previous">Previous Work</a>
                    <a className="nav-item nav-item-r" id="nav-hobbies" href="/hobbies">Hobbies</a>
                    <a className="nav-item nav-item-r" id="nav-contact" href="/contact">Contact</a>
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