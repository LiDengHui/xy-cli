const shell = require("shelljs");
const path = require("path");
const inquirer = require("inquirer");
const download = require("download-git-repo");
const ora = require("ora");
const log = require("./util/log");
const color = require("./util/color");

const getOptions = async (template, project) => {
    const questions = [];

    if (!project) {
        questions.push({
            type: "text",
            message: color("① 请输入文件夹名称"),
            name: "project",
        });
    }

    if (!template) {
        questions.push({
            type: "list",
            name: "template",
            message: color("② 请选择开发语言"),
            choices: ["vue"],
        });
    }

    const answers = await inquirer.prompt(questions);

    return {
        template,
        project,
        ...answers,
    };
};

const dictionary = {
    vue: {
        url: "direct:https://github.com/LiDengHui/vue-learn.git",
    },
};

function downloadTemplate(name, project) {
    const template = dictionary[name];
    if (!template) {
        log.error(`${name} is not exists`);
        return false;
    }

    const projectPath = path.resolve(process.cwd(), project);

    shell.rm("-rf", projectPath);
    shell.mkdir(projectPath);

    const spinner = ora(color("downloading template ......"));
    spinner.start();
    download(template.url, projectPath, { clone: true }, (err) => {
        spinner.stop();
        if (err) {
            log.error("下载失败");
        } else {
            shell.sed(
                "-i",
                "vue-learn",
                project,
                projectPath + "/package.json"
            );

            log.info("下载模板成功");
        }
    });
}

const handle = async (...args) => {
    const { template, project } = await getOptions(...args);
    downloadTemplate(template, project);
};

module.exports = {
    use: (program) => {
        program
            .command("create [template] [project]")
            .description("初始化项目")
            .action(handle);
    },
};
