import React from 'react'
import styles from './Home.module.css'
import my_photo from '../../images/my_photo.jpg'
const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.image_container}>
<img src={my_photo} alt='Mekonnen_image' />
</div>
<div className={styles.profile}>
    <h2>Mekonnen Abate</h2>
    <h5>System  Security Analyst Supervisor @ INSA</h5>
</div>
    </div>
  )
}

export default Home