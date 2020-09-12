const figlet = require("figlet");

const Printer = require("@darkobits/lolcatjs");

const version = require("../package.json").version;

const versionStr = figlet.textSync("XiaoYao");

const input = [`逍遥 CLI 日常开发工具`, `${version}`, `${versionStr}`];

const transformed = Printer.default.fromString(input.join("\n"));

module.exports = {
    transformed,
};
