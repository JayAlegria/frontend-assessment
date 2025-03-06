"use client"
import React, { useEffect } from "react"
import styles from "./page.module.scss"
import { useSwrFavorites } from "@/utils/useSwrFavorites"
import DashboardCardItems from "@/components/dashboard/DashboardCardItems"

const page = () => {
  const { favorites, isLoading, } = useSwrFavorites()
  return (
    <div className={styles["dashboard-card"]}>
      <h1>Dashboard</h1>
      <div className={styles["card__content"]}>
        <DashboardCardItems items={favorites} isLoading={isLoading} />
      </div>
    </div>
  )
}

export default page
