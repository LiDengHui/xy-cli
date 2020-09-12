const { transformed } = require("./version");
const log = require("./log");
const { program } = require("commander");

program.version(transformed);

log.info(transformed);

const createCommand = require("./create");
createCommand.use(program);

const json2tsCommand = require("./json2ts");
json2tsCommand.use(program);

program.parse(process.argv);
