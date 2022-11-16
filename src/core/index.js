import { readDirs, readNavDir } from "./readDir";

export function initialProps() {
  const subDirs =  readDirs("./src/pages/docs/");
  const dirs = readNavDir("./src/pages/docs");
  return { subDirs: subDirs, dirs: dirs };
}
