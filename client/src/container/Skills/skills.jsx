import React, { useEffect, useState } from 'react'
import './skills.scss'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { AppWrapper, MotionWrapper } from '../../Wrapper/'
import { Tooltip as ReactTooltip } from 'react-tooltip'
const Skills = () => {
  const [skills, setskills] = useState([])
  const [experiances, setExperiances] = useState([])


  useEffect(() => {
    const skillsQuery = '*[_type=="skill"]'
    const experienceQuery = '*[_type=="experiences"]'
    client.fetch(skillsQuery).then((data) => {
      setskills(data)
    })
    client.fetch(experienceQuery).then((data) => {
      console.log('experience', data)
      setExperiances(data)
    })
  }, [])

  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className='app__skills-container'>
        <motion.div
          className='app__skills-list'
        >
          {
            skills?.length > 0 && skills.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                key={index + skill?.name}
                className='app__skills-item app__flex'
              >{console.log(skill)}
                <div className='app__flex' style={{ background: skill?.BgColor
 }}>
                  <img src={urlFor(skill?.icon)} alt={skill?.name} />
                </div>
                <p className="p-text">{skill?.name}</p>
              </motion.div>
            ))
          }
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiances.length > 0 && experiances.map((experiance) => (
            <motion.div
              className='app__skills-exp-item'
              key={experiance.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experiance.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experiance?.works?.length > 0 &&
                  experiance?.works.map((work, index) => (
                    <div key={index}>
                      <motion.div className='app__skills-exp-work-item'
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}

                        data-tooltip-id={work?.name}
                        data-tooltip-content={work?.desc}

                      >
                        <h4 className="bold-text">{work?.name}</h4>
                        <p className="p-text">{work?.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work?.name}
                        opacity={1}
                        className='app__skills-tooltip'
                      />


                    </div>
                  ))}


              </motion.div>
            </motion.div>
          ))}
          {/* <> 
          </>  */}


        </motion.div>
      </div>
    </>
  )
}

export default AppWrapper(
  MotionWrapper(Skills, 'app__skills')
  , 'skills',
  "app__whitebg")