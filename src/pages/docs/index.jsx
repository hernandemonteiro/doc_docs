import React from "react";
import {
  ComponentDoc,
  DescriptionDoc,
  TitleDoc,
  Code,
} from "../../components/";

export default function HomeDocs() {
  return (
    <>
      <TitleDoc title="DescriptionDoc Component" />
      <DescriptionDoc description="this is a description for this project" />
      <TitleDoc title="ComponentDoc Component" />
      <ComponentDoc
        background="grey"
        element={
          <button
            onClick={() => alert("hello")}
            style={{ width: "100%", padding: "2%" }}
          >
            ALERT "hello"
          </button>
        }
        options={[
          { prop: "OnClick", default: "none", accept: "() => void" },
          { prop: "children", default: "none", accept: "string" },
        ]}
        description={
          "this is an component description used to show this resource"
        }
      />
      <TitleDoc title="Code Component" />
      <Code
        language="js"
        code={function testCode() {
          return "is running!";
        }}
      />
      <div style={{marginTop: "2%"}}>Aqui foi uma div que eu criei</div>
    </>
  );
}
