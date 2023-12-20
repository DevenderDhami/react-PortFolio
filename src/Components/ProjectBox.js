import React from 'react';
import { FaGithub, FaStore } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {

    "Medpreneur WebDesc": "Medpreneur is a single page static Website. Medpreneur is made using HTML5, CSS, and JavaScript .",
    "Medpreneur WebWebsite": "https://www.medpreneur.in/",

    SCGHealthDesc: "SCG health App is made using React Ionic ,It is fully functional App made for client - SCG Health",
    SCGHealthApp: "https://play.google.com/store/apps/details?id=com.scghealth.app&pcampaignid=web_share",

    "Kaksya AdminDesc": "Kaksya Admin is an Admin Panel of ELearning website  made using React Ionic and graphql queries.",
    "Kaksya AdminWebsite": "https://guru-ra.vercel.app/#/login",

    HexaTpDesc: "Hexatp is made using NextJs and Tailwind CSS ,It is fully functional website made for client - HexaBull",
    HexaTpWebsite: "https://caselaws.luezoid.com/",

    AgeCalculatorDesc: "AgeCalculator is made using React. This website is build to calculate the age on the  current date.",
    AgeCalculatorWebsite: "https://devenderdhami.github.io/react-ageCalculator/",
  }


  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + 'Desc']}
        <br />

        {desc[projectName + 'App'] ?
          <a href={desc[projectName + 'App']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><FaStore />Download App</button>
          </a> : ""}

        {desc[projectName + 'Website'] ?
          <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
            <button className='projectbtn'><CgFileDocument />Go to Website</button>
          </a> : ''}

      </div>
    </div>
  )
}

export default ProjectBox