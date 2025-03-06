import { TItemDetails } from "@/types/Item"
import React, { FC } from "react"
import styles from "./dashboardCardItems.module.scss"
import { Status } from "../common/Status"
import { currencyFormat } from "@/utils/currencyFormat"
import Loader from "../common/loader"
import { useRouter } from "next/navigation";

interface Props {
  items: TItemDetails[]
  isLoading: boolean
}
const DashboardCardItems: FC<Props> = (props) => {
  const { items, isLoading } = props
  const router = useRouter()
  return (
    <>
      {isLoading && <Loader />}
      {items &&
        items.map((item) => (
          <div className={styles["product-card"]} key={item.id}>
            <div className={styles["product-card__info"]}>
              <img src={item.image} alt={item.name} />
              <p className={styles["name"]}>{item.name}</p>
              <p className={styles["price"]}>{currencyFormat(item.price)}</p>
              <Status status={item.active} />
            </div>

            <div className={styles["product-card__actions"]}>
              <button>Remove</button>
              <button onClick={() => {router.push(`/item/${item.id}`)}}>View</button>
            </div>
          </div>
        ))}
    </>
  )
}

export default DashboardCardItems
