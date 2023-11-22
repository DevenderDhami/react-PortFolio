import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
<div className='footer-content'></div>
      <h4>Developed by Devender Singh</h4>
      <h4>Copyright &copy; 2023 DS</h4>
      <div className='footerLinks'>
        <a href="https://github.com/DevenderDhami" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://Instagram.com/dhamideva" target='_blank' rel='noreferrer'><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/devender-singh-4ab398222" target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='mailTo:devender.dhami.99@gmail.com' target='_blank' rel='noreferrer'><GrMail /></a>
      </div>
    </footer>
  )
}

export default Footer