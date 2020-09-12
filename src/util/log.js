const color = require("./color");

const error = (...args) => console.error(...args);
const info = (...args) => console.error(...args);
const handle = (fn, title) => (...args) => {
    args.unshift(title);
    for (let i in args) {
        if (typeof args[i] === "string") {
            args[i] = color(args[i]);
        }
    }

    fn(...args);
};

module.exports = {
    error: handle(error, `[ERROR]`),
    info: handle(info, `[INFO]`),
};
