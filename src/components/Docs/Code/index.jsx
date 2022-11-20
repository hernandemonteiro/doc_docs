import React from "react";

export default function Code(props) {
  return (
    <pre
      style={{
        backgroundColor: "gray",
        borderRadius: "7px",
        padding: "2%",
        margin: "1%",
      }}
    >
      <code
        style={{
          color: "black",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
        className={props.language}
      >{`${props.code}`}</code>
    </pre>
  );
}
