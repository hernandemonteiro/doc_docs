import React from "react";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);

export function Code(props) {
  setTimeout(() => hljs.highlightAll(), 300);

  return (
    <pre
      style={{
        backgroundColor: props.backgroundColor || "black",
        borderRadius: "7px",
        padding: "2%",
        margin: "1%",
      }}
    >
      <code
        style={{
          color: props.textColor || "white",
          fontSize: "1.2em",
          fontWeight: "bold",
        }}
        className={props.language}
      >{`${props.code}`}</code>
    </pre>
  );
}

export function DescriptionDoc(props) {
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

export function TitleDoc(props) {
  return (
    <div className="titleDocs" style={{ marginBottom: "2%" }}>
      <h1>{props.title}</h1>
      <hr />
    </div>
  );
}

export function ComponentDoc(props) {
  return (
    <div
      className="elementDescription"
      style={{ margin: "1%", border: "0.5px solid gray", borderRadius: "7px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: props.background || "black",
          padding: "2%",
        }}
      >
        {props.element}
      </div>
      {props.options && (
        <table style={{ width: "100%", textAlign: "center", padding: "2%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "1%" }}>Prop</th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Default
              </th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Accept
              </th>
            </tr>
          </thead>
          <tbody>
            {props.options.map((element) => (
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "1%",
                    fontWeight: "bold",
                  }}
                >
                  {element.prop}
                </td>
                <td style={{ border: "1px solid black", padding: "1%" }}>
                  {element.default}
                </td>
                <td style={{ border: "1px solid black", padding: "1%" }}>
                  {`${element.accept}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p style={{ padding: "2%" }}>{props.description}</p>
    </div>
  );
}
