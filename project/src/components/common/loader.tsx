import React from "react";
import styles from "./loader.module.scss"

const Loader = () => {
  return (
    <div className={styles["loader"]}>
      <img
        src="/assets/bouncing-circles.svg"
        alt="Loading..."
      />
    </div>
  );
};

export default Loader;