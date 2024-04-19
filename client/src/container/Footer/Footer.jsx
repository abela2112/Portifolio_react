import React, { useState } from 'react'
import './Footer.scss'
import { client, urlFor } from '../../client'
import { images } from '../../constant'
import { AppWrapper, MotionWrapper } from '../../Wrapper'
const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const { name, email, message } = formData
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }
  const handleSubmit = () => {
    setIsLoading(true)
    const contact = {
      _type: 'contact',
      name, email, message
    }
    client.create(contact).then((data) => {
      setIsLoading(false)
      setIsFormSubmitted(true)
    }).catch((err) => {console.log(err)})
  }
  return (
    <>
      <h2 className="head-text">take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:abela9326@gmail.com" className='p-text'>abela9326@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+251933017499" className='p-text'>+251 933-01-7499</a>
        </div>
      </div>
      {
        !isFormSubmitted ?
          <div className="app__footer-forms app__flex">
            <div className="app__flex">
              <input type="text" placeholder='Your Name' name='name' value={name} className="p-text" onChange={handleInputChange} />
            </div>
            <div className="app__flex">
              <input type="email" placeholder='Your Email' name='email' value={email} className="p-text" onChange={handleInputChange} />
            </div>
            <div>
              <textarea name="message" value={message} id="" cols="30" rows="10" placeholder='Your Message' onChange={handleInputChange}></textarea>
            </div>
            <button type='button' className='p-text' onClick={()=>handleSubmit()
            }>{isLoading ? 'loading' : 'send Message'}</button>

          </div>
          :
          <div>
            <h3 className="head-text">thanks for getting in touch</h3>
          </div>
      }

    </>
  )
}

export default AppWrapper(MotionWrapper(Footer, 'app__footer'), 'contact', 'app__whitebg')