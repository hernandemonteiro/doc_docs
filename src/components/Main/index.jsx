import React, { useContext } from "react";
import ColorContext from "../../provider/ColorContext";
import MenuReactDocs from "../Menu";
import styles from "./Main.module.css";

export default function MainReactDocs(props) {
  const { theme } = useContext(ColorContext);
  return (
    <main className={styles.Main} data-theme={theme}>
      {props.disabledIndexMenu === true ? (
        ""
      ) : (
        <MenuReactDocs configDirs={props.configDirs} />
      )}
      <div className={styles.ContentMain}>{props.children}</div>
    </main>
  );
}
