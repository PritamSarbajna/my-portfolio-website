import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import imge from '../../assets/images/main-circle.png'
import { motion } from 'framer-motion'

const Skills = () => {
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
      <div className="container container2 skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
        </div>

        <div className="circle-main">
          <div className="hover-show">
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
          </div>
          
          <img className='imge' src={imge} alt="" />
        </div>

        <motion.div drag whileHover={{ scale: 1.01 }} className="skill-table">
          <table class="table-tg">
            <thead>
              <tr>
                <th class="tg-header">Language</th>
                <th class="tg-header">Web Development</th>
                <th class="tg-header">Database</th>
                <th class="tg-header">OS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="tg-sub-text">C</td>
                <td class="tg-sub-text">HTML</td>
                <td class="tg-sub-text">SQLite</td>
                <td class="tg-sub-text">Windows</td>
              </tr>
              <tr>
                <td class="tg-sub-text">C++</td>
                <td class="tg-sub-text">CSS</td>
                <td class="tg-sub-text">MySQL</td>
                <td class="tg-sub-text">Linux</td>
              </tr>
              <tr>
                <td class="tg-sub-text">Python</td>
                <td class="tg-sub-text">JavaScript </td>
                <td class="tg-sub-text">PostgeSQL</td>
                <td class="tg-sub-text"></td>
              </tr>
              <tr>
                <td class="tg-sub-text">Java</td>
                <td class="tg-sub-text">React</td>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text"></td>
              </tr>
              <tr>
                <td class="tg-sub-text">Bash</td>
                <td class="tg-sub-text">Django</td>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text"></td>
              </tr>
              <tr>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text">Bootstrap</td>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text"></td>
              </tr>
              <tr>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text">Tailwing CSS</td>
                <td class="tg-sub-text"></td>
                <td class="tg-sub-text"></td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
      <Loader type="triangle-skew-spin" />
    </>
  )
}

export default Skills