const fs = require("fs");

let template = fs.readFileSync("./UserScriptTemplate.js", 'utf8');

template = template.replace("versionString", "0.1." + Date.now().toString().slice(5, -3));
const splitTemplate = template.split("\n");
for (let i = 0; i < splitTemplate.length; i++) {
    if (splitTemplate[i].includes("content;")) {
        splitTemplate[i] = fs.readFileSync("./fartify.js", 'utf-8');
    }
}
template = splitTemplate.join("\n");

fs.writeFileSync("Fartify.user.js", template);
