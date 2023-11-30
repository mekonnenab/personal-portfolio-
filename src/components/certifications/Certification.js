import React from 'react'
import { useState } from 'react'
import styles from './Certificate.module.css'
import CERT from '../../images/certi.jpg'
import CC from '../../images/cc.jpg'
import ITESS from '../../images/ITess.jpg'
const Certification = () => {
  const [dialog1, setDialog1] = useState(false);
  const [dialog, setDialog] = useState(false);
  const [imageSrc] = useState(CC);
  const [imageSrc1] = useState(ITESS);

  return (
    <div className={styles.container}>
       <div className={styles.cert}> 
       <img src={CERT} alt='Certification_img' />
       
       </div>
       <div className={styles.cert_info}>
        <h2>Certifications</h2>
        <h3>Certified in Cybersecurity (2023)</h3>
        <p>International Information System Security Certification Consortium - (ISC) ² </p>
          <button className={styles.popup_button} onClick={() => {setDialog(!dialog)}}>Show Certificate</button>
          {dialog && (
            <div className={styles.dialog}>
              <div className={styles.dialog_content}>
                <h3>CC Certificate </h3>
                <button className={styles.close_icon} onClick={() => {setDialog(!dialog)}}>&#10005;</button>
                <img className={styles.popup_image} src={imageSrc} alt="Popup_Image" />
              </div>
            </div>
          )}

<h3>IT Essentials (2015) </h3>
        <p>JIMMA University, Ethiopia</p>
       
        
          
          <button className={styles.popup_button} onClick={() => {setDialog1(!dialog1)}}>Show Certificate</button>
          {dialog1 && (
            <div className={styles.dialog}>
              <div className={styles.dialog_content}>
                <h3>IT Essentials Certificate </h3>
                <button className={styles.close_icon} onClick={() => {setDialog1(!dialog1)}}>&#10005;</button>
                <img className={styles.popup_image} src={imageSrc1} alt="Popup_Image" />
              </div>
            </div>
          )}
        </div>
        
    </div>
   
      
   
  )
}

export default Certification