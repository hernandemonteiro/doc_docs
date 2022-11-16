import React from "react"

export default function TitleDoc(props) {
  return (
    <div className="titleDocs">
      <h1 style={{ marginLeft: "2%" }}>{props.title}</h1>
      <hr />
    </div>
  );
}
