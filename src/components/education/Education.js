import React from 'react'
import { useState } from 'react'
import styles from './Education.module.css'
import image from '../../images/gradu.jpeg'
import TEMPO from '../../images/tempo.jpg'
const Education = () => {
  const [dialog, setDialog] = useState(false);
  const [imageSrc] = useState(TEMPO);
  return (
    <div className={styles.container}>
      <div className={styles.educ}>
        <img src={image} alt='graduation_photo' />
        <div className={styles.educ_prof}>
        <h2>Education</h2>
        <p>Bachelor of Science in Information Science | University of Jimma,  2014–2016</p>
       
          <button className={styles.popup_button} onClick={() => {setDialog(!dialog)}}>Show Degree Certificate</button>
          {dialog && (
            <div className={styles.dialog}>
              <div className={styles.dialog_content}>
                <h3>Expriance Letter </h3>
                <button className={styles.close_icon} onClick={() => {setDialog(!dialog)}}>&#10005;</button>
                <img className={styles.popup_image} src={imageSrc} alt="Popup_Image" />
              </div>
            </div>
          )}
       
      </div></div>
    </div>
  )
}

export default Education