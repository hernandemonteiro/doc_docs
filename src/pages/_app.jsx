import React from "react";
import { initialProps } from "../../dist/core";
import ComponentOrDocs from "../../dist";
import "./style.css";

function MyApp(props) {
  return (
    <div style={{width: "96.1vw"}}>
      <ComponentOrDocs
        dirs={props.dirs}
        subDirs={props.subDirs}
        Component={props.Component}
        pageProps={props.pageProps}
        route={props.router.route}
        projectLogo={"Doc Docs - Documentation"}
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
      
    </div>
  );
}

initialProps(MyApp);

export default MyApp;
