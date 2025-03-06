import ProductInfoCard from "@/components/item/ProductInfoCard"
import ProductInfoHeader from "@/components/item/ProductInfoHeader"
import { TItem } from "@/types/Item"
import { notFound } from "next/navigation"
import styles from "./page.module.scss"
import CheckOutCard from "@/components/item/CheckOutCard"

async function getItemDetails(idSegments: string[]) {
  console.log(idSegments)
  const id = idSegments[idSegments.length - 1]
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products/${id}`, { cache: "no-store" })

  if (!res.ok) return null
  return res.json()
}

export default async function Page({ params }: { params: { id: string[] } }) {
  const item: TItem | null = await getItemDetails(params.id)

  if (!item) return notFound()

  return (
    <>
      <ProductInfoHeader {...item} />
      <div className={styles["grid"]}>
       <ProductInfoCard {...item} />
       <CheckOutCard price={item.price} />
      </div>
    </>
  )
}
