import React from 'react'
import {NavigationDots,SocialMedia} from '../../components'
const AppWrap = (Component,IdName,className) => function HOC() {
  return (
    <div className={`app__container ${className}`} id={IdName}>
        <SocialMedia/>
        <div className="app__wrapper app__flex">
            <Component/>
            <div className="copyright">
                <p className='p-text'>@2023 ABEL</p>
                <p className='p-text'>All Rights Reserved</p>
            </div>
        </div>
        <NavigationDots active={IdName}/>
    </div>
  )
}

export default AppWrap