import React, { FC } from "react"
import styles from "./navItems.module.scss"
import { FolderIcon, HomeIcon, InboxIcon } from "@heroicons/react/24/outline"

interface Props {
  showIcon?: boolean
}
const NavItems: FC<Props> = (props) => {
  const { showIcon } = props
  return (
    <>
      <a href="/">
        <img src="/assets/logo.png" alt="logo" />
      </a>
      <a className={styles["active"]} href="/dashboard">
        {showIcon && <HomeIcon />}
        Dashboard
      </a>
      <a href="/browse">
        {showIcon && <FolderIcon />}
        Browse
      </a>
      <a href="/cart">
        {showIcon && <InboxIcon />}
        Cart
      </a>
    </>
  )
}

export default NavItems
