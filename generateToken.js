
const fs = require("fs");
const fetch = require('node-fetch');


let figmaTree;
let designTokens;

// get colors from styles artboard
function getColors(stylesArtboard) {
    const colors = {};
    const colorsArtboard = stylesArtboard.filter(style => {
        return style.name === "Color";
    })[0].children;

    colorsArtboard.map(color => {
        function rgba(val) {
            return Math.floor(val * 255);
        }

        // convert fill to rgba
        let fill = color.fills[0];

        let r = rgba(fill.color.r)
        let g = rgba(fill.color.g)
        let b = rgba(fill.color.b)
        let a = fill?.opacity ? fill.opacity.toFixed(2) : '1';

        colors[color.name] = {
            value: `rgba(${r}, ${g}, ${b}, ${a})`,
            type: "color"
        }
    });
    return colors;
}

// get figma json
const figmaApiToken = "189840-58838f90-2466-48a1-9634-2006f1332482"
const figmaId = "kGm31xFt0PUcFsiqSzdwk0"
async function getFigmaTree() {
    const query = "https://api.figma.com/v1/files/" + figmaId;
    const result = await fetch(query, {
        method: "GET",
        headers: {
            "X-Figma-Token": figmaApiToken
        }
    });
    figmaTree = await result.json();
}

function setDesignTokens() {
    // filter for styles page
    const stylesArtboard = figmaTree.document.children.filter(item => {
        return item.name === "Styles";
    })[0].children;

    designTokens = {
        colors: {}
    };

    // populate design tokens
    designTokens.colors = getColors(stylesArtboard)
}

async function writeJsonFile() {
    await fs.writeFile("tokens.json", JSON.stringify(designTokens, null, 2), err => {
        if (err) throw err; 
    });
}


// run script
async function run() {

    await getFigmaTree();

    setDesignTokens();

    await writeJsonFile();

    console.log(`Generate Token done (${new Date().toLocaleTimeString()})`);
    console.log();
}

run()

