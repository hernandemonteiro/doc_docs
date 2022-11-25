import React, { useContext } from "react";
import styles from "./Components.module.css";
import ColorContext from "../provider/ColorContext";

export function Code(props) {
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
  return <h1 className={styles.TitleDoc}>{props.title}</h1>;
}

export function ComponentDoc(props) {
  const { theme } = useContext(ColorContext);
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
          padding: "2%",
          backgroundColor: props.background || "black",
        }}
      >
        {props.element}
      </div>
      {props.options && (
        <table style={{ width: "100%", textAlign: "center", padding: "2%" }}>
          <thead>
            <tr>
              <th className={styles.td} data-theme={theme}>
                Prop
              </th>
              <th className={styles.td} data-theme={theme}>
                Default
              </th>
              <th className={styles.td} data-theme={theme}>
                Accept
              </th>
            </tr>
          </thead>
          <tbody>
            {props.options.map((element) => (
              <tr key={element.prop}>
                <td className={styles.td} data-theme={theme}>
                  {element.prop}
                </td>
                <td className={styles.td} data-theme={theme}>
                  {element.default}
                </td>
                <td
                  className={styles.td}
                  data-theme={theme}
                >{`${element.accept}`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {props.description && (
        <p style={{ padding: "2%" }}>{props.description}</p>
      )}
    </div>
  );
}
