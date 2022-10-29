import { getUserPkgManager } from "./getUserPkgManager";

export type Options = { esm?: boolean; bin?: boolean; browser?: boolean };

export async function createLibrary(name: string, options?: Options) {
  console.log("name", name);
  console.log("options", options);
  console.log(getUserPkgManager());
}
