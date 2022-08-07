import './index.scss'
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

// Icons
import { FaGlobe, FaGithubSquare } from "react-icons/fa";

// Pictures
import projectBlockchainTrading from '../../assets/images/project-blockchain-trading.gif'
import projectCryptoTracker from '../../assets/images/project-crypto-tracker.gif'
import projectBlog from '../../assets/images/project-blog-check.gif'
import projectAdventure from '../../assets/images/project-adventure.gif'
import projectKeylogger from '../../assets/images/project-keylogger.gif'
import projectCoffeeShop from '../../assets/images/project-coffee-shop.gif'

const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <>
      <div className="works-container projects-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['W', 'o', 'r', 'k', 's']}
              idx={15}
            />
          </h1>
        </div>


        <motion.div ref={carousel} className='carousel'>
            <motion.div drag="x" dragConstraints={{ right : 0, left : -width }} className="inner-carousel" >
              <motion.div className="item" >
                <img src={projectBlockchainTrading} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Landing Page</h6>
                    <div className="sub-item-content">
                      <p>React Js <br /> Tailwind CSS </p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/trading-with-blockchain" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://pritamsarbajna.github.io/trading-with-blockchain/" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <img src={projectCryptoTracker} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Crypto Tracker</h6>
                    <div className="sub-item-content">
                      <p>React Js <br /> Tailwind CSS <br /> API</p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/crypto-currency-tracker" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://react-crypto-currency-track.netlify.app/" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <img src={projectBlog} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Blog Website</h6>
                    <div className="sub-item-content">
                      <p>Django <br /> Bulma CSS</p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/blog-website" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://blog-check-website.herokuapp.com/" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <img src={projectAdventure} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Tourism Website</h6>
                    <div className="sub-item-content">
                      <p>HTML <br /> Vanilla CSS</p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/tourism-website" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://simple-tourism-organization.netlify.app/" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <img src={projectKeylogger} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Keylogger</h6>
                    <div className="sub-item-content">
                      <p>Python </p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/real-time-key-logger" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://github.com/PritamSarbajna/real-time-key-logger" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
              <motion.div className="item">
                <img src={projectCoffeeShop} alt="" />
                <div className="item-content">
                  <h6 className='item-content-title'>Coffee Shop</h6>
                    <div className="sub-item-content">
                      <p>Html <br /> Vanilla CSS <br /> JavaScript</p>
                      <div className="item-icon">
                        <a href="https://github.com/PritamSarbajna/coffee-shop-website" target="_blank" rel='noreferrer'>
                          <FaGithubSquare className='ic' />
                        </a>
                        <a href="https://demo-coffee-website.netlify.app/" target="_blank" rel='noreferrer'>
                          <FaGlobe className='ic' />
                        </a>
                      </div>
                    </div>
                </div>
              </motion.div>
            </motion.div>
        </motion.div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Projects