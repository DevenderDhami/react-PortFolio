import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>

            Hello, I'm <b>Devender Singh</b> from Uttarakhand, India, currently residing in Delhi. I hold a position as a <b>Front-End Developer</b> with one year of professional experience. <br /><br />
            During my internship at Luezoid Technologies Pvt. Ltd, a software development startup, I worked as a <b>Front-End Developer</b>. I have a passion for crafting unique projects with visually appealing designs, and you can explore some of my work in the projects section.<br /><br />
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>

      </div>

      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>

        <Skills skill='React' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Postman' />
        <Skills skill='Figma' />
        <Skills skill='Vercel' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap' />
        <Skills skill='Tailwind' />
        <Skills skill='Bootstrap' />
        <Skills skill='NextJs' />

      </div>
    </>
  )
}

export default About