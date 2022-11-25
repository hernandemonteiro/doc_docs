import React, { useContext, useState } from "react";
import PrimaryElementMenu, {
  PrimaryElementMenuWithoutLink,
} from "./PrimaryElementMenu";
import ColorContext from "../../provider/ColorContext";
import Head from "next/head";

export default function MenuReactDocs(props) {
  const [menu, setMenu] = useState(false);
  const { theme } = useContext(ColorContext);
  return (
    <>
      <Head>
        {" "}
        <style jsx>{`
          .Nav {
            width: 23%;
            padding: 1%;
            border-right: 1px solid rgba(0, 0, 0, 0.5);
            text-align: center;
          }

          .Nav[data-theme="dark"] {
            background-color: rgb(37, 37, 37);
            border-right: 1px solid gray;
          }

          .Summary {
            margin: 5%;
            font-weight: bold;
            cursor: pointer;
            color: black;
            user-select: none;
          }

          .Summary[data-theme="dark"] {
            color: white;
          }

          .btnMenuHide {
            display: none;
          }

          @media (max-width: 800px) {
            .Summary {
              margin: 3%;
            }

            .Nav {
              width: 100%;
              padding: 0px;
              text-align: center;
              border-right: none;
            }
            .Nav[data-theme="dark"] {
              border-right: none;
            }

            .hide {
              display: none;
            }

            .btnMenuHide {
              display: block;
              width: 100%;
              background: gray;
              color: white;
              border: none;
              padding: 2%;
              font-size: 1.3rem;
            }
          }
        `}</style>
      </Head>
      <nav className={"Nav"} data-theme={theme}>
        <button
          onClick={() => {
            menu ? setMenu(false) : setMenu(true);
          }}
          className={"btnMenuHide"}
        >
          MENU
        </button>
        <div className={!menu ? "hide" : ""}>
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
                        <summary className={"Summary"} data-theme={theme}>
                          {dir.toUpperCase()}
                        </summary>
                        <>
                          {props.configDirs.subDirs[dir].map((elementSub) => {
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
              );
            })}
        </div>
      </nav>
    </>
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
