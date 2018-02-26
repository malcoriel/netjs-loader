const { readFile } = require('fs-extra');
const compiler = {};
compiler.compile = async (path) => {
    const src = await readFile(path);
    return src.toString();
};
module.exports = compiler;
