import React from 'react'
import styles from './Footer.module.css'
import FB from '../../images/fb.png'
import IG from '../../images/ig.png'
import TWTR from '../../images/twtr.png'
import TG from '../../images/tg.png'
import LKDN from '../../images/lkn.png'
const Foter = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.contact}>
          <h2>Contacts</h2>  
          <p>Addis Ababa Ethiopia</p>
          <p>+251-924001543/+251-934425382</p>
          <p>abatemekonnen@gmail.com</p>
          
            <ul>
              <li> <a href='/'><img src={FB} alt='fb' /></a></li>
              <li> <a href='/'><img src={IG} alt='fb' /></a></li>
              <li> <a href='/'><img src={TWTR} alt='fb' /></a></li>
              <li> <a href='/'><img src={TG} alt='fb' /></a></li>
              <li> <a href='/'><img src={LKDN} alt='fb' /></a></li>
            </ul>
          
        </div>
        <div className={styles.copy_rgt}>
        <p>@2023 by mk</p>
        </div>

    </div>
  )
}

export default Foter