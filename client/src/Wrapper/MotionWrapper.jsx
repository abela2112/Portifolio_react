import React from 'react'
import { motion } from 'framer-motion'
const MotionWrapper = (Component, className) => function HOC() {
    return (
        <motion.div
            whileInView={{
                y: [100, 50, 0],
                opacity: [0, 1],
            }}
            transition={{ duration: 0.5 }}
            className={`${className} app__flex`}
        >
            <Component />
        </motion.div>
    )
}

export default MotionWrapper