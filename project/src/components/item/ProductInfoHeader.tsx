import React, { FC } from "react"
import styles from "./productInfoHeader.module.scss"

interface Props {
  image: string
  name: string
  seller: string
}
const ProductInfoHeader: FC<Props> = (props) => {
  const { image, name, seller } = props

  return (
    <div className={styles["product"]}>
    <div className={styles["product__image"]}>
        <img src={image} alt="" />
        <div className={styles["product__name"]}>
            <p>{name}</p>
            <span>{seller}</span>
        </div>
    </div>
    </div>
  )
}

export default ProductInfoHeader
