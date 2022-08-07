import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import aboutImg from '../../assets/images/about-me.jpg'
import { motion } from 'framer-motion'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

  return (
    <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>

                <div className="whole-about">
                    <div className="left">
                        <div className="card-about">
                            <div className="front-card-about">
                                <div className="front-details">
                                    <p><span>Pritam Sarbajna</span> here to welcome you all !! <br /> An incoming sophomore IT undergrad student in <em>Asansol Engineering College</em>, Love to explore technologies. Also have passion for programming, web development and Open source contribution. A tech enthusiast who is always eager to learn.
                                    <br /> <br /><q>"Your friendly neighborhood Developer"</q></p>
                                </div>
                            </div>

                            <div className="back-card-about">
                                <div className="details">
                                    <div className="sub-details">
                                        <h5>Asansol Engineering College</h5>
                                        <ul>
                                            <li>BTech In Information Technology</li>
                                            <li>2022-2025</li>
                                        </ul>
                                    </div>
                                    <div className="sub-details">
                                        <h5>Asansol Polytechnic College</h5>
                                        <ul>
                                            <li>Diploma In Mechanical Engineering</li>
                                            <li>2019-2022</li>
                                        </ul>
                                    </div>
                                    <div className="sub-details">
                                        <h5>Durgapur AVB High School</h5>
                                        <ul>
                                            <li>Class X</li>
                                            <li>2013-2019</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <motion.div drag className="box" whileTap={{ cursor: "grabbing" }}>
                            <div className="content">
                                <img src={aboutImg} alt="" />
                                <h3>Drag me anywhere</h3>
                            </div>
                        </motion.div>                    
                    </div>
                </div>
            </div>
        </div>
        <Loader type="triangle-skew-spin" />
    </>
  )
}

export default About