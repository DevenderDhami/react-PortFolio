import Lottie from 'lottie-react'
import React from 'react'
import ERROR from '../LottieFiles/Animation - 1700681678670.json'
import {BsArrowLeftCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
const Error404 = () => {
  return (
    <div>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '80vh', }}>
        <Lottie
          animationData={ERROR}
          loop={true}
          autoplay={true}
          style={{ width: '100%', height: '100%' }}
        />
        <div className='error-btn'>
        <Link to="/" className='error' ><BsArrowLeftCircle size="30px" style={{paddingRight:"15px"}}/>   Go to Home</Link>
        </div>

      </div>
    </div>
  )
}

export default Error404
