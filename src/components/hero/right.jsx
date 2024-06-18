
import './right.css'
import resume from '../../assets/resume.pdf'
import { FaInstagram,FaGithub   } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Right=()=> {

  return (
    <>
    <div className="text">

        <p>Hey, I am <span>Nilkamal</span></p>
        <h1>Frontend <br /> Developer</h1>

        <div className="button">
        <a href={resume} className='resume' download={resume}>Resume</a>
        <a href="#" className='connect'>Connect</a>
        </div>
   

      
    </div>
        <div className="social">
            <a href="https://www.instagram.com/_hola_its.nil_/" target='_blank'><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/nil-kamal-93945a294/" target='_blank'><FaLinkedin /></a>
            <a href="https://github.com/benil09" target='_blank'><FaGithub /></a>
        </div>
    </>
  )
}

export default Right
