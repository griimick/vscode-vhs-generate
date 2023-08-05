const fs = require("fs/promises");

async function setup(file) {
    const grammar = (
        await fetch(
            "https://raw.githubusercontent.com/charmbracelet/tree-sitter-vhs/main/grammar.js"
        )
    ).text();
    const content = "const { grammar } = require('./index.js');\n";
    try {
        if (await fs.access(`./${file}`)) await fs.rm(`./${file}`);
    } catch {}
    await fs.writeFile(`./${file}`, [content, grammar]);
}

setup("grammar.js");

module.exports = {
    grammar: function (obj) {
        const tm = {};
        tm.name = obj.name;
        tm.scopeName = "source.vhs";
        return tm;
    },
};
