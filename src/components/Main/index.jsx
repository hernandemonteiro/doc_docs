import React, { useContext } from "react";
import ColorContext from "../../provider/ColorContext";
import MenuReactDocs from "../Menu";
import Head from "next/head";

export default function MainReactDocs(props) {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <Head>
        <style jsx>{`
        .Main {
          display: flex;
          min-height: 85vh;
          background-color: white;
        }

        .Main[data-theme="dark"] {
          background-color: rgb(37, 37, 37);
          color: white;
        }

        .ContentMain {
          width: 77%;
          height: 100%;
          padding: 2%;
          margin-bottom: 7%;
        }

        @media (max-width: 800px) {
          .Main {
            display: block;
            /* padding: 0%; */
            /* margin: 0%; */
            padding: 3%;
          }

          .ContentMain {
            width: 100%;
            padding: 0%;
          }
        }
      s`}</style>
      </Head>
      <main className={"Main"} data-theme={theme}>
        {props.disabledIndexMenu === true ? (
          ""
        ) : (
          <MenuReactDocs configDirs={props.configDirs} />
        )}
        <div className={"ContentMain"}>{props.children}</div>
      </main>
    </>
  );
}
