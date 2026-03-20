const JavaScriptObfuscator = require('javascript-obfuscator');
const fs = require('fs');

const code = fs.readFileSync('app.js', 'utf8');

const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    deadCodeInjection: true,
    debugProtection: true,
    disableConsoleOutput: true,
    stringArray: true,
    stringArrayEncoding: ['base64'],
}).getObfuscatedCode();

fs.writeFileSync('app.obf.js', obfuscatedCode);

console.log("✅ Fichier obfusqué généré : app.obf.js");