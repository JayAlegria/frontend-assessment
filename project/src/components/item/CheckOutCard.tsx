import React, { FC } from "react"
import styles from "./checkOutCard.module.scss"
import { currencyFormat } from "@/utils/currencyFormat"
import { ChevronDownIcon, MapPinIcon } from "@heroicons/react/24/outline"
interface Props {
  price: string
}
const CheckOutCard: FC<Props> = (props) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card__col"]}>
        <input type="radio" checked />
        <div className={styles["card__info"]}>
          <h3>Buy new</h3>
          <p className={styles["price"]}>{currencyFormat(props.price)}</p>

          <div className={styles["prime"]}>
            <img className={styles["prime"]} src="/assets/prime.png" alt="prime same day" />
            <p>
              {" "}
              FREE Returns <ChevronDownIcon className="w-5 h-5" />
            </p>
          </div>

          <div className={styles["delivery-details"]}>
            <p>
              FREE delivery <span>Today 2 PM - 6 PM</span>
            </p>
            <p>
              . Order within <span>1 hr 15 mins</span>
            </p>
          </div>

          <div className={styles["delivery-location"]}>
            <MapPinIcon className="w-5 h-5" />
            <p>Deliver to Tom Cook</p>
          </div>

          <div className={styles["quantity"]}>
            <p>In Stock</p>
            <select name="quantity" id="quantity" defaultValue={1}>
              <option value="1">Qty: 1</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles["card__action"]}>
        <button>Add to Cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  )
}

export default CheckOutCard
