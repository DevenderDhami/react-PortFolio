import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    TindogDesc : "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub : "",
    TindogWebsite : "https://devanshsahni.github.io/tindog/",

    RogFreeDesc : "A website that shows you over seven specialized yoga postures for specific diseases or health problems. This was a group project made in a team of two for a 36-hour-long online hackathon named Hackodisha 2.0.",
    RogFreeGithub : "",
    RogFreeWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    "Medpreneur WebDesc":"Medpreneur is a single page static Website. Medpreneur is made using HTML5, CSS, and JavaScript .",
    "Medpreneur WebGithub":"",
    "Medpreneur WebWebsite":"https://www.medpreneur.in/",
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

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank' rel='noreferrer'>
              <button className='projectbtn'><CgFileDocument/>Go to Website</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox