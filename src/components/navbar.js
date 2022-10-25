import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';







let Navbar = () =>{
    const [navstyle,setNavstyle] = useState('closed')
    const changeNavstyle = (input) => {
        setNavstyle(input)
        
        console.log('Swap Icon!')
    }
    let navIcon
    let vertNav
    if (navstyle == 'closed') {
        navIcon = <img onClick={()=>changeNavstyle('open')} id="navClosed" className= 'navicon'
        src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/hamburger.svg" alt="hamburger menu"/>
        vertNav='hideVertNav navbar-right-list'
    } else {
        navIcon = <img onClick={()=>changeNavstyle('closed')} id="navOpen" className='navicon' 
        src="https://www.richardmiddleton.me/wp-content/themes/richardcodes/assets/img/close.svg" alt="close hamburger"/>
        vertNav='VertNav navbar-right-list'

    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-left">
                    <Link className="nav-item nav-item-l" id="nav-name" to="/">Tyler Matthews</Link>
                    <div className="nav-toggle" id="navToggle">
                        {navIcon}
                    </div>
                </div>
                <nav className={`navbar-right-${navstyle}`}>
                    <ul className='navbar-right-list' >
                        <Link className="nav-item nav-item-r" id="nav-projects" to="/projects">Projects</Link>
                        <Link className="nav-item nav-item-r" id="nav-previous" to="/previous">Previous Work</Link>
                        <Link className="nav-item nav-item-r" id="nav-hobbies" to="/hobbies">Hobbies</Link>
                        <Link className="nav-item nav-item-r" id="nav-contact" to="/contact">Contact</Link>
                    </ul>
                </nav>
            </div>
            <div className="underline">
                <div className="underline-l"></div>
                <div className="underline-r"></div>
            </div>
        </>
    )
}

export default Navbar