import React from "react";
import ComponentOrDocs from "../../index";
import "./style.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <div style={{width: "100"}}>
      <ComponentOrDocs
        Component={Component}
        pageProps={pageProps}
        route={router}
        projectLogo={"Doc Docs - Documentation"}
        github="https://github.com/hernandemonteiro/personal_blog"
        website="https://hernandemonteiro.vercel.app"
        instagram="https://instagram.com/monteiro.ops"
      />
    </div>
  );
}

export default MyApp;
