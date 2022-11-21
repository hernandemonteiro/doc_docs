import React from "react";
import "../styles/globals.css";
import ComponentOrDocs, { initialProps } from "doc_docs";

function MyApp({ Component, pageProps, router, dirs }) {
  return (
    <ComponentOrDocs
      route={router}
      Component={Component}
      pageProps={pageProps}
      configDirs={dirs}
      projectLogo={"Teste Docs"}
    />
  );
}

MyApp.getInitialProps = async () => {
  const dirs = await initialProps();

  return {
    dirs,
  };
};

export default MyApp;
