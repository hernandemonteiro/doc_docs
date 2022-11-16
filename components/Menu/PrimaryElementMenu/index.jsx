import React from "react";

export default function PrimaryElementMenu(props) {
  return (
    <>
      <hr style={{ marginTop: "7%", marginBottom: "7%" }} />
      <a
        href={props.path}
        style={{
          width: "100%",
          color: "black",
          margin: "7%",
          textDecoration: "none",
        }}
      >
        {props.name}
      </a>
      <hr style={{ marginTop: "7%", marginBottom: "7%" }}/>
    </>
  );
}
