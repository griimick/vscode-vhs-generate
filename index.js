const fs = require("fs/promises");
const EleventyFetch = require("@11ty/eleventy-fetch");

async function setup(file) {
    const grammar = await EleventyFetch(
        "https://raw.githubusercontent.com/charmbracelet/tree-sitter-vhs/main/grammar.js",
        {
            duration: "1d",
            type: "text",
        }
    );
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
