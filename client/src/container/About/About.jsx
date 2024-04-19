import React, { useEffect, useState } from 'react'
import './about.scss'
import { motion } from 'framer-motion'
import {client,urlFor} from '../../client'
import { AppWrapper, MotionWrapper } from '../../Wrapper'
const About = () => {
  const query='*[_type=="about"]'
  
  const [abouts, setAbouts] = useState([])
  useEffect(()=>{
    client.fetch(query).then((data)=>{setAbouts(data)
   
    }).catch((error)=>console.log(error))
  },[])
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Design</span>
        means
        <br />
        <span>Good Business</span>
      </h2>
      <div className="app__profiles">{
       abouts.length>0 && abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{duration:0.5,type:'tween'}}
            className='app__profiles-item'
            key={`about-${index}`}

          >
          
            <img src={urlFor(about.imageURL)} alt={about.title} />
            <h2 className="bold-text" style={{marginRight:20,marginTop:10}} >{about.title}</h2>
            <p className="p-text"  style={{marginRight:10}}>{about.description}</p>

          </motion.div>
        ))
      }</div>


    </>
  )
}

export default AppWrapper(
  MotionWrapper( About,'app__about'),
  'about',
  "app__whitebg")