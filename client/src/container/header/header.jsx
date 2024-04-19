import React from 'react'
import './header.scss'
import { motion } from 'framer-motion'

import { images } from '../../constant'
import { AppWrapper } from '../../Wrapper'
//import AppWrap from '../../Wrapper/AppWrapper/AppWrap'
const scaleVariant = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }


}
const Header = () => {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='app__header-info'
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello,I am </p>
              <h1 className="head-text">Abel</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
              <p className="p-text">web developer</p>
              <p className="p-text">freelancer</p>
            </div>
        </div>
      </motion.div>
     
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile-img" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt='image-circle'
          className='overlay__circle'

        />
      </motion.div>

      <motion.div
        variants={scaleVariant}
        whileInView={scaleVariant.whileInView}
        className='app__header-circles'
      >
{
  [images.redux,images.flutter,images.sass].map((circle,index)=>(
    <div className="circle-cmp app__flex" key={`circle-${circle}`}>
      <img src={circle} alt="circle" />
    </div>
  ))
}

      </motion.div>

    </div>
  )
}

export default AppWrapper(Header, 'home');