import React from "react";
import ComponentOrDocs from "../src/index";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
  // page used for tests in development mode;
  return (
    <ComponentOrDocs
      configDirs={{
        dirs: ["api", "env"],
        subDirs: { api: ["user", "auth"] },
      }}
      Component={Component}
      pageProps={pageProps}
      route={router}
      projectLogo={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <img
            width={50}
            height={50}
            src="https://preview-hernandemonteiro.vercel.app/favicon.png"
          />
          <h3>Doc Docs - Documents</h3>
        </div>
      }
      github="https://github.com/hernandemonteiro/personal_blog"
      website="https://hernandemonteiro.vercel.app"
      instagram="https://instagram.com/monteiro.ops"
    />
  );
}

export default MyApp;
