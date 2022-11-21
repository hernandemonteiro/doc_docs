import "../styles/globals.css";
import { initialProps } from "doc_docs/core";
import ComponentOrDocs from "doc_docs";
const component = initialProps();

function MyApp({ Component, pageProps, router }) {

  return (
    <ComponentOrDocs
      route={router.route}
      Component={Component}
      pageProps={pageProps}
      dirs={component.dirs}
      subDirs={component.subDirs}
      projectLogo={"Teste Docs"}
    />
  );
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

export default MyApp;
