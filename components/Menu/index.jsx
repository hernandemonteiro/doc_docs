import React from "react";
import PrimaryElementMenu from "./PrimaryElementMenu";

export default function MenuReactDocs(props) {
  return (
    <nav
      style={{
        display: "flex",
        flexDirection: "column",
        width: "23%",
        padding: "1%",
        borderRight: "1px solid rgba(0,0,0,0.5)",
      }}
    >
      <PrimaryElementMenu
        path={"/docs"}
        name={"GETTING STARTED!"}
      />

      {props.dirs.map((dir) => (
        <div key={dir}>
          {subDirsIsFileOrObject(props.subDirs[dir]) > 1 ? (
            <>
              <hr />
              <details>
                <summary
                  style={{
                    margin: "5%",
                    fontWeight: "bold",
                    cursor: "pointer",
                    color: "black",
                  }}
                >
                  {dir.toUpperCase()}
                </summary>
                <>
                  {Object.keys(props.subDirs[dir]).map((elementSub) => {
                    return elementSub === "index.tsx" ||
                      elementSub === "index.jsx" ? (
                      <PrimaryElementMenu
                        key={elementSub}
                        path={`/docs/${dir}`}
                        name={"INTRO"}
                      />
                    ) : (
                      <PrimaryElementMenu
                        key={elementSub}
                        path={`/docs/${dir}/${elementSub}`}
                        name={removeExtensionAndFormateName(elementSub)}
                      />
                    );
                  })}
                </>
              </details>
              <hr />
            </>
          ) : dir.match("index") ? (
            ""
          ) : (
            <PrimaryElementMenu
              path={`/docs/${dir}`}
              name={removeExtensionAndFormateName(dir)}
              margin={"5%"}
            />
          )}
        </div>
      ))}
    </nav>
  );
}

function subDirsIsFileOrObject(obj) {
  return obj ? Object.keys(obj).length : 0;
}

function removeExtensionAndFormateName(fileName) {
  let newName;
  fileName.match(".tsx")
    ? (newName = fileName.replace(".tsx", ""))
    : (newName = fileName);
  fileName.match(".ts")
    ? (newName = fileName.replace(".ts", ""))
    : (newName = fileName);
  fileName.match(".js")
    ? (newName = fileName.replace(".js", "."))
    : (newName = fileName);
  fileName.match(".jsx")
    ? (newName = fileName.replace(".jsx", "."))
    : (newName = fileName);
  fileName.match("_")
    ? (newName = fileName.replace("_", " "))
    : (newName = fileName);

  return newName.toUpperCase();
}
