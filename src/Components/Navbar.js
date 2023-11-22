import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import Lottie from 'lottie-react';
import bombAnimation from '../LottieFiles/spooky-cat.json';
import LOGO from '../images/logo2.png'
// import bombAnimation from '../LottieFiles/happy-halloween.json';

const Nav = () => {
    const [navbarblur, setnavbarblur] = useState(false);
    const [show, setShow] = useState(false);
    const router = useLocation();
    const currentRoute = router?.pathname;
    function scrollHandler() {
        if (window.scrollY >= 20) {
            setnavbarblur(true);
        } else {
            setnavbarblur(false);
        }
    }

    const showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    const hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <>
            <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
                <h1 onClick={() => setShow(!show)} title='Reload' className='Logo'>
                    <img src={LOGO} height={40} alt='logo' />
                </h1>

                <div className='Hamburger' onClick={showMenu}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

                <ul className='NavbarLinks'>
                    <li onClick={hideMenu}><Link className={`${currentRoute === '/' ? "active" : ""}`} to="/"><AiOutlineHome /> Home</Link></li>
                    <li onClick={hideMenu}><Link className={`${currentRoute === '/About' ? "active" : ""}`} to="/About"><BsPerson /> About</Link></li>
                    <li onClick={hideMenu}><Link className={`${currentRoute === '/Project' ? "active" : ""}`} to="/Project"><BsCodeSlash /> Project</Link></li>
                    <li onClick={hideMenu}><Link className={`${currentRoute === '/Resume' ? "active" : ""}`} to="/Resume"><CgFileDocument /> Resume</Link></li>
                </ul>
            </nav>
            {show && (
                <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: "white", zIndex: 999 }}>
                    <Lottie
                        onClick={() => { setShow(!show) }}
                        animationData={bombAnimation}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            )}
        </>
    );
}

export default Nav;
