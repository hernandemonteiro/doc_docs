import React from "react";
import ComponentOrDocs, { initialProps }  from "../index";

function MyApp({ Component, pageProps, router, dirs }) {
  return (
    <ComponentOrDocs
      configDirs={dirs}
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

MyApp.getInitialProps = async () => {
  const dirs = await initialProps();
  return {
    dirs,
  };
};

export default MyApp;
