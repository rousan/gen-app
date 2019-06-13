#!/usr/bin/env node

import path from 'path';
import program from 'commander';

program
  .version('1.0.0', '-v, --version')
  .usage('[options] [app name]')
  .parse(process.argv);

const appLocation: string = path.resolve(program.args.length ? program.args[0] : '.');

console.log(appLocation);
