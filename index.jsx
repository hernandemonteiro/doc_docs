import React from "react";
import TemplateReactDocs from "./components/Template";

export default function ComponentOrDocs(props) {
  return (
    <>
      {props.route.match("/docs") ? (
        <TemplateReactDocs
        style={{maxWidth: "100vw"}}
          dirs={props.dirs}
          subDirs={props.subDirs}
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
