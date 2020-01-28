import { bgYellow, red, bold } from "https://deno.land/std/fmt/colors.ts";

import {toLength} from "https://deno.land//lodash/toLength.ts";

const sayHello = (name: string = "world") => {
  console.log(bgYellow(red(bold(`Hello ${name}!`))));
}


sayHello();

sayHello("Conlssin");

