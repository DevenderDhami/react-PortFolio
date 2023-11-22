import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/NewsletterImage.png';
import RogfreeImage from '../images/RogfreeImage.png';
import TindogImage from '../images/TindogImage.png';
import MedpreneurWeb from '../images/medreneur-web.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MedpreneurWeb} projectName="Medpreneur Web" />
        {/* <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
        {/* <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" /> */}
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </div>
  )
}

export default Projects