const handle = (...args) => {
    console.log(args);
};

module.exports = {
    use: (program) => {
        program.option("-c, --create <packagename>", "🐻 初始化项目", handle);
    },
};
