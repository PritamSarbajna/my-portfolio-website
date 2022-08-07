import './index.scss'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import homeGIF from '../../assets/images/home-simpson.gif'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P', 'r', 'i', 't', 'a', 'm', ' ', 'S', 'a', 'r', 'b', 'a', 'j', 'n', 'a']

    useEffect(() => {
        
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        
        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

  return (
    <>
    <div className="container2 home-page">
        <div className="text-zone">
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>&nbsp;
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>
            <div className="change-outer">
                <div className="change-inner">
                    <h2>DEVELOPER</h2>
                    <h2>PROGRAMMER</h2>
                    <h2>OPEN SOURCE CONTRIBUTOR</h2>
                </div>
            </div>
            <Link to="/contact" className="button">LET'S CONNECT</Link>
        </div>

        <div className="logo-container">
            <img className='gif' src={homeGIF} alt="gif" />
        </div>
    </div>
    <Loader type="triangle-skew-spin" />
</>
  )
}

export default Home