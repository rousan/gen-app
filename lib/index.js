#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var path_1 = tslib_1.__importDefault(require("path"));
var commander_1 = tslib_1.__importDefault(require("commander"));
commander_1.default
    .version('1.0.0', '-v, --version')
    .usage('[options] [app name]')
    .parse(process.argv);
var appLocation = path_1.default.resolve(commander_1.default.args.length ? commander_1.default.args[0] : '.');
console.log(appLocation);
