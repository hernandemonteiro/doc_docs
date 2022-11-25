import React, { useContext } from "react";
import ColorContext from "../../provider/ColorContext";
import Head from "next/head";

export default function FooterReactDocs(props) {
  const { theme } = useContext(ColorContext);

  return props.customFooter ? (
    props.customFooter
  ) : (
    <>
      <Head>
        <style jsx>{`
          .Footer {
            display: flex;
            align-items: center;
            background-color: #3d3333;
            width: 100%;
            height: 100px;
            border-top: 2px solid rgba(0, 0, 0, 0.5);
          }

          .Footer[data-theme="dark"] {
            background-color: black;
          }
        `}</style>
      </Head>
      <footer className={"Footer"} data-theme={theme}>
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
    </>
  );
}
