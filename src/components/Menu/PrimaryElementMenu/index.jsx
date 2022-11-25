import React, { useContext } from "react";
import ColorContext from "../../../provider/ColorContext";
import styles from "./PrimaryElementMenu.module.css";

export default function PrimaryElementMenu(props) {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <hr className={styles.hrMargin} />
      <a href={props.path} className={styles.LinkMenu} data-theme={theme}>
        {props.name}
      </a>
      <hr className={styles.hrMargin} />
    </>
  );
}

export function PrimaryElementMenuWithoutLink(props) {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <hr className={styles.hrMargin} />
      <div className={styles.LinkMenu} data-theme={theme}>
        {props.name}
      </div>
      <hr className={styles.hrMargin} />
    </>
  );
}
