module.exports = {
    moduleFileExtensions: ["ts", "js", "html"],
    moduleNameMapper: {
        //For avoid long imports with ...
        "@/(.*)": "<rootDir>/src/$1",
    },
};
