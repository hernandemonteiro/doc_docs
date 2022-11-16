import React from "react";

export default function ComponentDoc(props) {
  return (
    <div className="elementDescription" style={{ margin: "1%" }}>
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
      <div
        className="descriptionDocs"
        style={{
          padding: "1%",
          borderBottom: "0.5px solid gray",
          borderLeft: "0.5px solid gray",
          borderRight: "0.5px solid gray",
        }}
      >
        {props.options && (
          <table style={{ width: "100%", textAlign: "center", padding: "2%" }}>
            <thead>
              <th style={{ border: "1px solid black", padding: "1%" }}>Prop</th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Default
              </th>
              <th style={{ border: "1px solid black", padding: "1%" }}>
                Accept
              </th>
            </thead>
            <tbody>
              {Object.keys(props.options).map((element) => (
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
                    `${element.accept}`
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <p style={{ padding: "2%" }}>{props.description}</p>
      </div>
    </div>
  );
}
