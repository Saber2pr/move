#!/usr/bin/env node

import mv from "./core";
import { Terminal } from "@saber2pr/node";

const [from, to, ...excludeExts] = Terminal.getParams();

if (!(from && to)) {
  throw new TypeError(
    "mv: need two arguments at least(from:string, to:string, excludeExts:string[])."
  );
}

mv(from, to, excludeExts).catch(console.log);
