import React, { useContext } from "react";
import ColorContext from "../../provider/ColorContext";
import styles from "./Footer.module.css";

export default function FooterReactDocs(props) {
  const { theme } = useContext(ColorContext);

  return props.customFooter ? (
    props.customFooter
  ) : (
    <footer className={styles.Footer} data-theme={theme}>
      <p style={{ width: "100%", color: "white", textAlign: "center" }}>
        Designed with <b>doc_docs</b>, created by{" "}
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hernandemonteiro/doc_docs"
        >
          Hernande Monteiro
        </a>
      </p>
    </footer>
  );
}
