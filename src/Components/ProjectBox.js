import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
    "Medpreneur WebDesc":"Medpreneur is a single page static Website. Medpreneur is made using HTML5, CSS, and JavaScript .",
    "Medpreneur WebWebsite":"https://www.medpreneur.in/",

    HexaTpDesc : "Hexatp is made using NextJs and Tailwind CSS ,It is fully functional website made for client - HexaBull",
    HexaTpWebsite : "https://caselaws.luezoid.com/",

    AgeCalculatorDesc : "AgeCalculator is made using React. This website is build to calculate the age on the  current date.",
    AgeCalculatorWebsite : "https://devenderdhami.github.io/react-ageCalculator/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
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


            <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><CgFileDocument/>Go to Website</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox