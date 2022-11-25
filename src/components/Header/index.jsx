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
import styles from "./Header.module.css";
import ColorContext from "../../provider/ColorContext";

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
    <header className={styles.header} data-theme={theme}>
      <a href={"/docs"} className={styles.LogoHeader}>
        {props.logo || "Your app name!"}
      </a>

      <div className={styles.HeaderSocials}>
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
  );
}
