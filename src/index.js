const { transformed } = require("./version");
const { program } = require("commander");

console.info(transformed);

const createCommand = require("./create");
createCommand.use(program);

const json2tsCommand = require("./json2ts");
json2tsCommand.use(program);

program.parse(process.argv);
