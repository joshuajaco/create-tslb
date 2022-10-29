#!/usr/bin/env node
import { program } from "commander";
import { createLibrary } from "./index.js";

await program
  .name("create-tslb")
  .argument("<name>", "Package name")
  .option("--esm", "ESModule boiii")
  .option("--bin", "bin boii")
  .option("--browser", "browser")
  .version("0.0.1", "-v, --version")
  .action(createLibrary)
  .parseAsync();
