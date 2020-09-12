// json 文件转成 ts 类型
const json2ts = require("json2ts");
const log = require("./util/log");
const fs = require("fs");
const path = require("path");

const handle = (url) => {
    const result = fs.readFileSync(path.resolve(process.cwd(), url));
    const jsonContent = result.toString();
    const data = json2ts.convert(jsonContent);
    log.info(data);
};

module.exports = {
    use(program) {
        program.option("-t, --json2ts <fileurl>", "将 json 转成 ts", handle);
    },
};
