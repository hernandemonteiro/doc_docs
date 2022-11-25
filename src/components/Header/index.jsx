import React, { useContext, useEffect } from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { FiMoon, FiSun } from "react-icons/fi";
import { setCookie, parseCookies } from "nookies";
import ColorContext from "../../provider/ColorContext";
import Head from "next/head";

export default function HeaderNextDocs(props) {
  const cookies = parseCookies();
  const { theme, setTheme } = useContext(ColorContext);
  useEffect(() => {
    if (cookies.theme) {
      setTheme(cookies.theme);
    }
  }, []);

  return props.customHeader ? (
    props.customHeader
  ) : (
    <>
      <Head>
        <style jsx>{`
          .header {
            display: flex;
            background-color: #3d3333;
            flex-direction: row;
            width: 100%;
            min-height: 100px;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            flex-wrap: wrap;
          }

          .header[data-theme="dark"] {
            background-color: black;
          }

          .HeaderSocials {
            width: 50%;
            text-align: right;
            color: white;
            font-size: 1.5em;
            margin-right: 2%;
          }

          .LogoHeader {
            display: flex;
            width: 40%;
            color: white;
            text-transform: uppercase;
            text-decoration: none;
            margin: 2%;
          }

          @media (max-width: 800px) {
            .HeaderSocials {
              width: 100%;
              text-align: center;
              margin: 2%;
            }

            .LogoHeader {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: row;
              width: 100%;
              text-align: center;
              margin: 4%;
            }
          }
        `}</style>
      </Head>
      <header className={"header"} data-theme={theme}>
        <div className={"LogoHeader"}>{props.logo || "Your app name!"}</div>

        <div className={"HeaderSocials"}>
          {props.github && (
            <a
              href={props.github}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub style={{ margin: "1%" }} />
            </a>
          )}
          {props.facebook && (
            <a
              href={props.facebook}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook style={{ margin: "1%" }} />
            </a>
          )}
          {props.instagram && (
            <a
              href={props.instagram}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram style={{ margin: "1%" }} />
            </a>
          )}
          {props.linkedin && (
            <a
              href={props.linkedin}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin style={{ margin: "1%" }} />
            </a>
          )}
          {props.discord && (
            <a
              href={props.discord}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord style={{ margin: "1%" }} />
            </a>
          )}
          {props.website && (
            <a
              href={props.website}
              style={{ color: "white" }}
              target="_blank"
              rel="noreferrer"
            >
              <GoBrowser style={{ margin: "1%" }} />
            </a>
          )}
          {theme === "dark" && (
            <FiMoon
              style={{ margin: "1%", cursor: "pointer" }}
              onClick={() => {
                setTheme("light");
                setCookie(null, "theme", "light");
              }}
            />
          )}
          {theme === "light" && (
            <FiSun
              style={{ margin: "1%", cursor: "pointer" }}
              onClick={() => {
                setTheme("dark");
                setCookie(null, "theme", "dark");
              }}
            />
          )}
        </div>
      </header>
    </>
  );
}
