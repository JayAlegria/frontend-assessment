import React, { FC } from "react"
import styles from "./productInfoCard.module.scss"
interface Props {
  brand: string
  model: string
  color: string
  category: string
  description: string
}
const ProductInfoCard: FC<Props> = (props) => {
  const { brand, model, color, category, description } = props
  return (
    <div className={styles["card"]}>
        <div className={styles["card__header"]}>
            <p>Product Information</p>
            <span>Item and seller details</span>
        </div>
        <div className={styles["card__content"]}>
            <div className={styles["card__row"]}>
                <div className={styles["card__row__content"]}>
                    <p>Brand</p>
                    <p>{brand}</p>
                </div>
                <div className={styles["card__row__content"]}>
                    <p>Model Name</p>
                    <p>{model}</p>
                </div>
            </div>
            <div className={styles["card__row"]}>
                <div className={styles["card__row__content"]}>
                    <p>Color</p>
                    <p>{color}</p>
                </div>
                <div className={styles["card__row__content"]}>
                    <p>Category</p>
                    <p>{category}</p>
                </div>
            </div>
            <div className={styles["card__row--full"]}>
                <p>About</p>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductInfoCard
