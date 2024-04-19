import React, { useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4 } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";
import { images } from '../../constant'
import { motion } from 'framer-motion'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'About', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>))}
      </ul>

      <div


        className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{duration: 0.85, ease: 'easeOut'}}
            >
              <HiOutlineX onClick={() => setToggle(false)} />
              <ul>
              {['home', 'About', 'work', 'Skills', 'testimonials', 'contact'].map((item) =>
              (
                <li className='p-text' key={`${item}`} onClick={() => setToggle(false)}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
              </ul>

            </motion.div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar