import React from "react";
import MenuReactDocs from "../Menu";

export default function MainReactDocs(props) {
  return (
    <main
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        marginBottom: "7%",
        backgroundColor: "white" || "#0e0f12",
      }}
    >
      {props.disabledIndexMenu === true ? (
        ""
      ) : (
        <MenuReactDocs subDirs={props.subDirs} dirs={props.dirs} />
      )}
      <div
        style={{
          width: props.disabledIndexMenu === true ? "100%" : "77%",
          height: "100%",
          padding: "2%",
        }}
      >
        {props.children}
      </div>
    </main>
  );
}
