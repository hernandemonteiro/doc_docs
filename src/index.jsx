import React from "react";
import TemplateReactDocs from "./components/Template";

export default function ComponentOrDocs(props) {
  return (
    <>
      {props.route.route.match("/docs") ? (
        <TemplateReactDocs
          configDirs={props.configDirs}
          projectLogo={props.projectLogo}
          disabledIndexMenu={props.disabledIndexMenu}
          customFooter={props.customFooter}
          customHeader={props.customHeader}
          github={props.github}
          facebook={props.facebook}
          instagram={props.instagram}
          linkedin={props.linkedin}
          discord={props.discord}
          website={props.website}
        >
          <props.Component {...props.pageProps} />
        </TemplateReactDocs>
      ) : (
        <props.Component {...props.pageProps} />
      )}
    </>
  );
}
