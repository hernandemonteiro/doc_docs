import React from "react";
import FooterReactDocs from "../Footer";
import HeaderNextDocs from "../Header";
import MainReactDocs from "../Main";

export default function TemplateReactDocs(props) {
  return (
    <>
      <HeaderNextDocs
        logo={props.projectLogo}
        customHeader={props.customHeader}
        github={props.github}
        facebook={props.facebook}
        instagram={props.instagram}
        linkedin={props.linkedin}
        discord={props.discord}
        website={props.website}
      />
      <MainReactDocs
        disabledIndexMenu={props.disabledIndexMenu}
        configDirs={props.configDirs}
      >
        {props.children}
      </MainReactDocs>
      <FooterReactDocs customFooter={props.customFooter} />
    </>
  );
}
