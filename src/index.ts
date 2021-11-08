#!/usr/bin/env ts-node
import process from "process";
const cwd = process.cwd();
const args: string[] = process.argv.slice(2);
(async () => {
  console.log(cwd, args);
})().catch(() => {});
