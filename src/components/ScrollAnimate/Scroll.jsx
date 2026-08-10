import React from 'react'
import "./Scroll.css"
import { motion, useScroll } from 'framer-motion';

const Scroll = () => {
    const { scrollYProgress } = useScroll()
    return (
        <motion.div className='scroll'
            style={{
                scaleX: scrollYProgress,
                // originX: 0
            }}
        >

        </motion.div>
    )
}

export default Scroll
