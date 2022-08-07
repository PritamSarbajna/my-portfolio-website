import './index.scss'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'

import contactMe from '../../assets/images/contact-me.png'

import { FaGithubSquare, FaLinkedin} from "react-icons/fa";

const Contact = () => {

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
      <div className="contact-container contact-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
        </div>

        <div drag className="whole-contact">
          <div className="sub-whole-contact">
            <div className="left">

              <div className="left-container">
                <img src={contactMe} alt="" />
                <h6>Find <br /> <span>Pritam Sarbajna</span> <br /> at</h6>
                
                <div className="contact-icons">
                  <button>
                    <a className='ic1' href="https://github.com/PritamSarbajna" target='_blank' rel='noreferrer'>
                      <FaGithubSquare className="contact-icon" />
                    </a>
                  </button>
                  <button>
                    <a className='ic2' href="https://www.linkedin.com/in/pritam-sarbajna-74945821b/" target='_blank' rel='noreferrer'>
                      <FaLinkedin className="contact-icon" />
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="line"></div>

            <div className="right">
              <h6>Get in touch with me</h6>

              <div className="contact-form">
                <form name='contact' data-netlify="true" method="post" onSubmit="submit">
                  <input type="hidden" name="form-name" value="contact" />
                  <input className='input' type="text" name="name" placeholder='Your name' />
                  <input className='input' type="email" name="email" id="" placeholder='Email' />
                  <textarea className='input' name="message" id="" cols="20" rows="2" placeholder='Your message here...'></textarea>
                  <input className='btn' type="submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Contact