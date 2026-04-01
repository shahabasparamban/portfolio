import React, {useState} from 'react'
import img4 from '../../Assets/img4.png'
import { Link } from 'react-scroll';
import './Navbar.css';
import menu from '../../Assets/menu.png';


const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={img4} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Resume</Link>
      </div>
      <Link><button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      }}>Contact me

      </button></Link>

 <img src={menu} alt="menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
 {/* {showMenu && ( */}
 <div className="navMenu" style={{ display :showMenu? 'flex':'none'}}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem"oCclick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to="resume" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Resume</Link>
         <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-100} duration={500} className="listItem"onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
{/* // )} */}
    </nav>
  )
}

export default Navbar
