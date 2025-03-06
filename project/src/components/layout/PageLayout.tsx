"use client"
import React, { ReactNode, useEffect } from "react"
import styles from "./pageLayout.module.scss"
import classNames from "classnames"
import Aside from "./Aside"
import { usePathname } from "next/navigation"
import { usePageLayoutContext } from "@/context/PageLayoutContext"
import { Navbar } from "./Navbar"

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { hasSideBar } = usePageLayoutContext()

  return (
    <div className={classNames(styles["page-container"], { [styles["page-container--isAside"]]: hasSideBar })}>
      {!hasSideBar && (
        <>
          <div className={styles["page-bg"]}></div>
          <Navbar />
        </>
      )}
      {hasSideBar && <Aside />}
      <div className={styles["page-content"]}>{children}</div>
    </div>
  )
}

export default PageLayout
