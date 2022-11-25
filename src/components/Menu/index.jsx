import React, { useContext, useState } from "react";
import PrimaryElementMenu, { PrimaryElementMenuWithoutLink } from "./PrimaryElementMenu";
import styles from "./Menu.module.css";
import ColorContext from "../../provider/ColorContext";

export default function MenuReactDocs(props) {
  const [menu, setMenu] = useState(false);
  const { theme } = useContext(ColorContext);
  return (
    <nav className={styles.Nav} data-theme={theme}>
      <button
        onClick={() => {
          menu ? setMenu(false) : setMenu(true);
        }}
        className={styles.btnMenuHide}
      >
        MENU
      </button>
      <div className={!menu ? styles.hide : ""}>
        <PrimaryElementMenu path={"/docs"} name={"GETTING STARTED!"} />
        {props.configDirs.dirs
          .filter((dir) => dir != "[options]")
          .filter((dir) => dir != "[langs]")
          .map((dir) => {
            return (
              <div key={dir}>
                {subDirsIsFileOrObject(props.configDirs.subDirs[dir]) > 1 ? (
                  <>
                    <hr />
                    <details>
                      <summary className={styles.Summary} data-theme={theme}>
                        {dir.toUpperCase()}
                      </summary>
                      <>
                        {props.configDirs.subDirs[dir].map((elementSub) => {
                          return elementSub === "index.tsx" ||
                            elementSub === "index.jsx" ? (
                            <PrimaryElementMenuWithoutLink
                              key={elementSub}
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
            );
          })}
      </div>
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
