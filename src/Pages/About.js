import React, { useEffect, useState } from 'react';
import Skills from '../Components/Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';
import Layout from '../Components/AppLayout/Layout.js';
import "./About.css"

const About = () => {
  const [daysDifference, setDaysDifference] = useState(null);

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date('2022-08-01');
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = currentDate - targetDate;
    // Convert the difference to days
    const differenceInDays = Math.floor(differenceInMilliseconds / (24 * 60 * 60 * 1000));
    setDaysDifference(differenceInDays);
  }, []);

  const years = Math.floor(daysDifference / 365);
  const remainingDays = daysDifference % 365;
  const months = Math.floor(remainingDays / 30);
  return (
    <Layout>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <div>
            <p>

              Hello, I'm <b>Devender Singh</b>, originally   from Uttarakhand (India), currently living in Delhi (India). I'm actively employed as a <b>Front-End Developer</b> with <b> {years ? `${years} ${years>1?"years":"year"}` : ""} {months ? `& ${months} months` : ""} </b> of professional experience at <b>Luezoid Technologies Pvt. Ltd.</b> <br /><br />
            </p>
            <div className='whatIdid'> <b>
              What I did as FrontEnd Developer
            </b>
              <ul>
                <li>{`Designed and implemented responsive web applications using React.js .`}</li>
                <li>{`Collaborated with UI/UX designers to create visually appealing user interfaces.`}</li>
                <li>{`Implemented state management with Redux for efficient application state handling.`}</li>
                <li>{`Integrated RESTful APIs to fetch and update data, enhancing functionality .`}</li>
                <li>{`Worked with cross-functional teams, including UI/UX designers and backend developers.`}</li>
                <li>{`Participated in Agile/Scrum ceremonies, providing updates and contributing to planning.`}</li>
                <li>{`Conducted code reviews to maintain high quality and adherence to coding standards.`}</li>
                <li>{`Actively contributed to troubleshooting and resolving software defects.`}</li>
                <li>{`Implemented responsive and mobile-first design principles.`}</li>
                <li>{`Ensured seamless adaptation to various screen sizes and devices.`}</li>
              </ul>
            </div>
            {/* During my internship at Luezoid Technologies Pvt. Ltd, a software development startup, I worked as a <b>Front-End Developer</b>.  */}

            <p>
              I have a passion for crafting unique projects with visually appealing designs, and you can explore some of my work in the projects section.<br /><br />
              I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br />
            </p>
          </div>
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
    </Layout>
  )
}

export default About