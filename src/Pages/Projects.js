import React from 'react';
import ProjectBox from '../Components/ProjectBox';
import MedpreneurWeb from '../images/medreneur-web.png';
import SCGHealth from '../images/SCGhealth.png';
import HexaTp from '../images/HexaTp.png';
import AgeCalculator from '../images/Age-Calculator.png';
import Layout from '../Components/AppLayout/Layout';

const Projects = () => {
  return (
    <Layout>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={MedpreneurWeb} projectName="Medpreneur Web" />
        <ProjectBox projectPhoto={SCGHealth} projectName="SCGHealth" />
        <ProjectBox projectPhoto={HexaTp} projectName="HexaTp" />
        <ProjectBox projectPhoto={AgeCalculator} projectName="AgeCalculator" />
        {/* <ProjectBox projectPhoto={NewsletterImage} projectName="Newsletter" /> */}
        {/* <ProjectBox projectPhoto={RogfreeImage} projectName="RogFree" /> */}
        {/* <ProjectBox projectPhoto={TindogImage} projectName="Tindog" /> */}
      </div>

    </Layout>
  )
}

export default Projects