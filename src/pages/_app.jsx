import React from "react";
import { initialProps } from "../../dist/core";
import ComponentOrDocs from "../../dist";
import "./style.css";

function MyApp(props) {
  return (
    <>
      <ComponentOrDocs
        dirs={props.dirs}
        subDirs={props.subDirs}
        Component={props.Component}
        pageProps={props.pageProps}
        route={props.router.route}
        projectLogo={"Hernande Monteiro - Personal Blog"}
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
      
    </>
  );
}

initialProps(MyApp);

export default MyApp;
