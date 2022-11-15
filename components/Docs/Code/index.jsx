import React from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
// import "highlight.js/styles/github-dark.css";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export default function Code(props) {
  setTimeout(() => hljs.highlightAll(), 300);

  return (
    <pre
      style={{
        backgroundColor: "black",
        borderRadius: "7px",
        padding: "2%",
        margin: "1%"
      }}
    >
      <code
        style={{
          color: "white",
          fontSize: "1.2em",
          fontWeight: "bold"
        }}
        className={props.language}
      >{`${props.code}`}</code>
    </pre>
  );
}
