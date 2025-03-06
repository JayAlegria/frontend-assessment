import classNames from "classnames"
import styles from "./status.module.scss"

export const Status = ({ status }: { status?: boolean }) => {
  const statusColorMap = {
    active: "bg-green-100 text-green-800",
    inActive: "bg-gray-500 text-white",
  }
  return (
    <span className={classNames(statusColorMap[status ? "active" : "inActive"], styles["status"])}>
      {status && "active"}
      {!status && "inactive"}
    </span>
  )
}
