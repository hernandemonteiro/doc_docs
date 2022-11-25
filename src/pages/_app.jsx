import React from "react";
import ComponentOrDocs from "../index";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <ComponentOrDocs
      configDirs={{
        dirs: [ "api", "env"],
        subDirs: { api: ["user", "auth"] },
      }}
      Component={Component}
      pageProps={pageProps}
      route={router}
      projectLogo={"Doc Docs - Documentation"}
      github="https://github.com/hernandemonteiro/personal_blog"
      website="https://hernandemonteiro.vercel.app"
      instagram="https://instagram.com/monteiro.ops"
    />
  );
}

export default MyApp;
