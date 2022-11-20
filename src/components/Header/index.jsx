import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { FiMoon, FiSun } from "react-icons/fi";

export default function HeaderNextDocs(props) {
  return props.customHeader ? (
    props.customHeader
  ) : (
    <header
      style={{
        display: "flex",
        backgroundColor: "#3d3333" || "#070708",
        width: "100%",
        height: "100px",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(0,0,0,0.3)",
      }}
    >
      <a
        href={"/docs"}
        style={{
          color: "white",
          textTransform: "uppercase",
          textDecoration: "none",
          marginLeft: "2%"
        }}
      >
        {props.logo || "Your app name!"}
      </a>

      <div
        style={{
          width: "50%",
          textAlign: "right",
          color: "white",
          fontSize: "1.5em",
          marginRight: "2%"
        }}
      >
        {/* definir método para trocar dark light */}
        {/* {store("theme") === true && (
          <FiMoon
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", false);
              window.location.reload();
            }}
          />
        )}
        {store("theme") === false && (
          <FiSun
            style={{ margin: "1%" }}
            onClick={() => {
              store("theme", true);
              window.location.reload();
            }}
          />
        )} */}
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
      </div>
    </header>
  );
}
