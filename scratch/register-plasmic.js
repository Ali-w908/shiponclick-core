const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '../src/components');
const plasmicFile = path.join(__dirname, '../src/lib/plasmic.ts');

function findComponents(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(findComponents(file));
        } else if (file.endsWith('.tsx')) {
            const content = fs.readFileSync(file, 'utf8');
            const relativePath = path.relative(path.join(__dirname, '../src'), file).replace(/\\/g, '/').replace('.tsx', '');
            
            // match export function Name or export default function Name
            // or export const Name = 
            const regex = /export\s+(?:default\s+)?(?:function|const)\s+([A-Z][a-zA-Z0-9_]*)/g;
            let match;
            while ((match = regex.exec(content)) !== null) {
                const name = match[1];
                let isDefault = content.includes(`export default function ${name}`) || content.includes(`export default ${name}`);
                results.push({ name, path: relativePath, isDefault });
            }
            
            // match export { A, B, C }
            const exportRegex = /export\s+\{([^}]+)\}/g;
            while ((match = exportRegex.exec(content)) !== null) {
                const exports = match[1].split(',').map(s => s.trim()).filter(s => s && s[0] === s[0].toUpperCase()); // naive check for component names (capitalized)
                exports.forEach(name => {
                    results.push({ name, path: relativePath, isDefault: false });
                });
            }
        }
    });
    return results;
}

const components = findComponents(componentsDir);

let imports = '';
let registrations = '';

// Deduplicate
const seen = new Set();
const uniqueComponents = [];
for (const comp of components) {
    if (!seen.has(comp.name)) {
        seen.add(comp.name);
        uniqueComponents.push(comp);
    }
}

uniqueComponents.forEach(comp => {
    if (comp.isDefault) {
        imports += `import ${comp.name} from "@/${comp.path}";\n`;
    } else {
        imports += `import { ${comp.name} } from "@/${comp.path}";\n`;
    }
    registrations += `
PLASMIC.registerComponent(${comp.name}, {
  name: "${comp.name}",
  props: {}
});
`;
});

const currentPlasmic = fs.readFileSync(plasmicFile, 'utf8');
fs.writeFileSync(plasmicFile, currentPlasmic + '\n' + imports + '\n' + registrations);
console.log(`Registered ${uniqueComponents.length} components.`);
