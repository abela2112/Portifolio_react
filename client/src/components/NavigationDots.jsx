import React from 'react'

const NavigationDots = ({ active }) => {
    return (
        <div className='app__navigation'>
            {['home', 'about', 'work', 'skills', 'testimonials', 'contact'].map((item) => (
                <a href={`#${item}`}
                    key={`link-${item}`}
                    className='app__navigation-dot'
                    style={active === item ? { background: '#313BAC' } : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots