import React from "react";

export default function FooterReactDocs(props) {
  return props.customFooter ? (
    props.customFooter
  ) : (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#3d3333" || "#070708",
        width: "100%",
        height: "100px",
        borderTop: "2px solid rgba(0,0,0,0.5)",
      }}
    >
      <p style={{ width: "100%", color: "white", textAlign: "center" }}>
        Designed with <b>doc_docs</b>, created by{" "}
        <a
          style={{ color: "white" }}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/hernandemonteiro"
        >
          Hernande Monteiro
        </a>
      </p>
    </footer>
  );
}
