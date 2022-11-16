import React from "react"

export default function DescriptionDoc(props) {
  return (
    <div
      className="descriptionDocs"
      style={{
        margin: "1%",
        borderRadius: "5px",
        border: "0.5px solid gray",
        padding: "3%",
      }}
    >
      {props.description}
    </div>
  );
}
