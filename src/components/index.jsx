import Head from "next/head";
import React, { useContext } from "react";
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
  return (
    <>
      <Head>
        <style jsx>{`
          .TitleDoc {
            margin: 4% 0 4%;
            font-size: 1.4rem;
            border-bottom: 1px solid gray;
          }
        `}</style>
      </Head>
      <h1 className={"TitleDoc"}>{props.title}</h1>
    </>
  );
}

export function ComponentDoc(props) {
  const { theme } = useContext(ColorContext);
  return (
    <div
      className="elementDescription"
      style={{ margin: "1%", border: "0.5px solid gray", borderRadius: "7px" }}
    >
      <Head>
        <style jsx>{`
          .td {
            border: 1px solid black;
            padding: 1%;
          }

          .td[data-theme="dark"] {
            border: 1px solid gray;
          }
        `}</style>
      </Head>
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
              <th className={"td"} data-theme={theme}>
                Prop
              </th>
              <th className={"td"} data-theme={theme}>
                Default
              </th>
              <th className={"td"} data-theme={theme}>
                Accept
              </th>
            </tr>
          </thead>
          <tbody>
            {props.options.map((element) => (
              <tr key={element.prop}>
                <td className={"td"} data-theme={theme}>
                  {element.prop}
                </td>
                <td className={"td"} data-theme={theme}>
                  {element.default}
                </td>
                <td
                  className={"td"}
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
