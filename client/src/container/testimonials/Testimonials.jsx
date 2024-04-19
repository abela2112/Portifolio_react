import React, { useEffect, useState } from 'react'
import './testimonial.scss'
import { AppWrapper, MotionWrapper } from '../../Wrapper'
import { client, urlFor } from '../../client'
import { motion } from 'framer-motion'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'
const Testimonials = () => {
  const [testimonial, setTestimonial] = useState([])
  const [brands, setBrands] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const test = testimonial[currentIndex]
  useEffect(() => {
    const testimonialQuery = '*[_type=="Testimonial"]'
    const brandQuery = '*[_type=="brands"]'

    client.fetch(testimonialQuery).then((data) => setTestimonial(data))
    client.fetch(brandQuery).then((data) => setBrands(data))

  }, [])
  return (
    <>{
      testimonial.length > 0 &&
      <>
        <div className='app__testimonial-item app__flex'>
          <img src={urlFor(test?.imageURL)} alt='testimonial' />
          <div className="app__testimonial-item-content">
            <p className="p-text">{test?.feedback}</p>

            <div>
              <h4 className='bold-text'>{test?.name}</h4>
              <h5 className='p-text'>{test?.company}</h5>
            </div>
          </div>

        </div>
        <div className='app__testimonial-btns app__flex'>
          <div className='app__flex' onClick={() => setCurrentIndex(currentIndex === 0 ? testimonial.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className='app__flex' onClick={() => setCurrentIndex(currentIndex === testimonial.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>

      </>
    }
      <div className="app__testimonial-brands app__flex">
        {brands.length > 0 && brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={brand?._id}
          >
            <img src={urlFor(brand.imageURL)} />
          </motion.div>
        ))}
      </div>

    </>

  )
}

export default AppWrapper(MotionWrapper(Testimonials, 'app__testimonial'), 'testimonials', 'app__primarybg')