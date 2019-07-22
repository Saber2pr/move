#!/usr/bin/env node

import mv from "./core";
import { Terminal } from "@saber2pr/node";

const [from, to] = Terminal.getParams();

if (!(from && to)) {
  throw new TypeError("mvLess: need two arguments(arg1:from, arg2:to).");
}

mv(from, to).catch(console.log);
