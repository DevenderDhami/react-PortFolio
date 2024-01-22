import React from 'react';
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "../Components/Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import { CiCoffeeCup } from "react-icons/ci";
import Layout from '../Components/AppLayout/Layout.js';

const Home = () => {
  return (
    <Layout>
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>DEVENDER SINGH</b></h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
        />

      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of transforming a raw idea into a website or a product that positively impacts lives. I am eager to engage in work that challenges me as a developer and allows me to create projects of which I can be proud.<br /><br />
            I am well-versed in <b>JavaScript</b>. Currently, I am engaged in various projects that involve the use of Next.js, React, React-Admin, and React-Ionic.<br />
            <br />Also, I love <b>Tea</b> <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </Layout>
  )
}

export default Home