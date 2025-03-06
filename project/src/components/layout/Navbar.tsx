import React from "react"
import styles from "./navbar.module.scss"
import { BellIcon } from "@heroicons/react/24/outline" // Solid version
import NavItems from "./NavItems"

export const Navbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <div className={styles["navbar__inner"]}>
        <div className={styles["navbar__links"]}>
          <NavItems />
        </div>
        <div className={styles["navbar__profile"]}>
          <a href="#">
            <BellIcon className="h-6 w-6 text-gray-500" />
          </a>
          <a href="#">
            <img src="/assets/profile.png" alt="profile" />
          </a>
        </div>
      </div>
    </nav>
  )
}
