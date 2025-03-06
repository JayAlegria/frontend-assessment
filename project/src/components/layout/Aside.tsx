import React from 'react'
import styles from "./aside.module.scss"
import NavItems from './NavItems'

const Aside = () => {
  return (
    <aside className={styles["aside"]}>
       <div className={styles["aside__links"]}>
            <NavItems showIcon/>
       </div>
       <div className={styles["aside__profile"]}>
          <a href="#">
            <img src="/assets/profile.png" alt="profile" />
          </a>
          <div className={styles["info"]}>
                <p>Tom Cook</p>
                <span>View profile</span>
            </div>
        </div>
    </aside>
  )
}

export default Aside