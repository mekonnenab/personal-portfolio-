import React from 'react'
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
import styles from './Header.module.css'
import myphoto from '../../images/mk.jpeg';
import { useState } from 'react'
const Header = () => {
  const[btn,setBtn]=useState(false)
  
  return (
    <div className={styles.header}>
         <img src={myphoto} alt="Mekonnen_image"/>
     
         <nav>
        <ul className={btn ? [styles.links,styles.active].join(' '):styles.links}>
          
            <li>
              <NavLink to="/">Home</NavLink>
              </li>
            <li> <NavLink to="/About">About</NavLink></li>
            <li> <NavLink to="/Education">Education</NavLink></li>
            <li> <NavLink to="/Expriance">Expriance</NavLink></li>
            <li> <NavLink to="/Certification">Certification</NavLink></li>
        </ul>
        </nav>
        <div onClick={()=>setBtn(!btn)} className={styles.mbl_menu}>
         {btn ? <AiOutlineClose size={25} className={styles.close_btn} /> :<AiOutlineMenu size={25} />} 
        </div>
    </div>
  )
}

export default Header