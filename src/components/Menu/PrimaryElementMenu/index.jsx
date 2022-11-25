import Head from "next/head";
import React, { useContext } from "react";
import ColorContext from "../../../provider/ColorContext";

export default function PrimaryElementMenu(props) {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <Head>
        {" "}
        <style jsx>{`
          .LinkMenu {
            width: 100%;
            color: black;
            text-decoration: none;
          }

          .LinkMenu[data-theme="dark"] {
            color: white;
          }

          .hrMargin {
            margin-top: 7%;
            margin-bottom: 7%;
          }

          @media (max-width: 800px) {
            .LinkMenu {
              text-align: center;
            }

            .hrMargin {
              margin-top: 3%;
              margin-bottom: 3%;
            }
          }
        `}</style>
      </Head>
      <hr className={"hrMargin"} />

      <a href={props.path} className={"LinkMenu"} data-theme={theme}>
        {props.name}
      </a>
      <hr className={"hrMargin"} />
    </>
  );
}

export function PrimaryElementMenuWithoutLink(props) {
  const { theme } = useContext(ColorContext);
  return (
    <>
      <Head>
        {" "}
        <style jsx>{`
          .LinkMenu {
            width: 100%;
            color: black;
            text-decoration: none;
          }

          .LinkMenu[data-theme="dark"] {
            color: white;
          }

          .hrMargin {
            margin-top: 7%;
            margin-bottom: 7%;
          }

          @media (max-width: 800px) {
            .LinkMenu {
              text-align: center;
            }

            .hrMargin {
              margin-top: 3%;
              margin-bottom: 3%;
            }
          }
        `}</style>
      </Head>
      <hr className={"hrMargin"} />

      <div className={"LinkMenu"} data-theme={theme}>
        {props.name}
      </div>
      <hr className={"hrMargin"} />
    </>
  );
}
