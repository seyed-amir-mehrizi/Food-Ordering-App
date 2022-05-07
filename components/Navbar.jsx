import Image from 'next/image'
import React from 'react'
import styles from '../styles/Navbar.module.css'
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src='/img/phone.png' alt='this is phone for the Restaurant' width={32} height={32}/>
      </div>
      <div className={styles.texts}>
      <div className={styles.text}>ORDER NOW!</div>
      <div className={styles.text}>012 345 678</div>

      </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home Page</li>
          <li className={styles.listItem}>Product</li>
          <li className={styles.listItem}>Menu</li>
          <Image src='/img/logo.png' alt='This is a Amir Restaurant Logo' width={160} height={69}/>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        <Image src='/img/logo.png' alt='This is a Amir Restaurant Logo' width={160} height={69}/>
        </div>
        <div className={styles.counter}>
          2
        </div>
      </div>

    </div>
  )
}

export default Navbar