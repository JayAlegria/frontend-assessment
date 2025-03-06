import { TItemDetails } from "@/types/Item"
import React, { FC } from "react"
import styles from "./dashboardItemList.module.scss"
import Loader from "../common/loader"
import { Status } from "../common/Status"
import {currencyFormat} from "@/utils/currencyFormat";
import { useRouter } from "next/navigation";

interface Props {
  items: TItemDetails[]
  isLoading: boolean
}
const DashboardItemList: FC<Props> = (props) => {
  const { items, isLoading } = props
    const router = useRouter()
  return (
    <table className={styles["itemList"]}>
      <thead>
        <tr>
          <th className="w-1/3">Name</th>
          <th className="w-1/4">Seller</th>
          <th>Status</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {isLoading && (
          <tr className={styles["loader"]}>
            <td colSpan={5}>
              <Loader />
            </td>
          </tr>
        )}
        {items &&
          items.map((item) => (
            <tr key={item.id} onClick={() => router.push(`/item/${item.id}`)}>
              <td>
                <img src={item.image} alt={`${name} image`} />
                <p>{item.name}</p>
              </td>
              <td>{item.seller}</td>
              <td>
                <Status status={item.active}/>
              </td>
              <td>{currencyFormat(item.price)}</td>
              <td>
                <p>Remove</p>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default DashboardItemList
