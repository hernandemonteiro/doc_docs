import React from "react";
import { ComponentDoc, DescriptionDoc, TitleDoc, Code } from "../../../dist/components";

export default function HomeDocs() {
  return (
    <>
      <TitleDoc title="DescriptionDoc Component" />
      <DescriptionDoc description="this is a description for this project" />
      <TitleDoc title="ComponentDoc Component" />
      <ComponentDoc
        background="purple"
        element={
          <button style={{ width: "100%", padding: "2%" }}>
            BUTTON EXAMPLE
          </button>
        }
        options={[
          { prop: "OnClick", default: "none", accept: "() => void" },
          { prop: "children", default: "none", accept: "string" },
        ]}
        description="this is an component description used to show tis resource"
      />
      <TitleDoc title="Code Component" />
      <Code
        language="js"
        code={function testCode() {
          return "is running!";
        }}
      />
    </>
  );
}
