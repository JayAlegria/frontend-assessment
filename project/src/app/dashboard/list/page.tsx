"use client"
import React from "react"
import styles from "./page.module.scss"
import DashboardItemList from "@/components/dashboard/DashboardItemList"
import { useSwrFavorites } from "@/utils/useSwrFavorites"

const page = () => {
  const { favorites, isLoading } = useSwrFavorites()
  return (
    <div className={styles["dashboard-list"]}>
      <h1>Dashboard</h1>

      <div className={styles["card"]}>
        <div className={styles["card__header"]}>
          <div className={styles["card__intro"]}>
            <p>Favorites</p>
            <p>A list of your items to keep track of.</p>
          </div>
          <div className={styles["card__actions"]}>
            <button>+ Add</button>
          </div>
        </div>
        <div className={styles["card__content"]}>
          <DashboardItemList items={favorites} isLoading={isLoading} />
        </div>
      </div>
    </div>
  )
}

export default page
