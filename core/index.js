import { readDirs, readNavDir } from "./readDir";

export function initialProps(RootElement) {
  RootElement.getInitialProps = async () => {
    const subDirs = await readDirs("./src/pages/docs/");
    const dirs = await readNavDir("./src/pages/docs");
    let pageProps = { subDirs: subDirs, dirs: dirs };
    return pageProps;
  };
}
