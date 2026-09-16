const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ANSI Color Codes for pretty terminal output
const colors = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    green: "\x1b[32m",
    boldGreen: "\x1b[1;32m",
    blue: "\x1b[34m",
    boldBlue: "\x1b[1;34m",
    yellow: "\x1b[33m",
    cyan: "\x1b[36m",
    gray: "\x1b[90m"
};

async function main() {
    console.log(`\n${colors.boldBlue}🚀 Welcome to the ShipOnClick Project Setup 🚀${colors.reset}\n`);

    const args = process.argv.slice(2);
    let projectName = args[0];
    let description = '';
    let audience = '';
    let features = '';

    for (let i = 1; i < args.length; i++) {
        if (args[i] === '--description') description = args[++i];
        if (args[i] === '--audience') audience = args[++i];
        if (args[i] === '--features') features = args[++i];
    }

    if (!projectName) {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const question = (query) => new Promise((resolve) => rl.question(query, resolve));
        projectName = await question(`${colors.cyan}What is your project name? (e.g., my-saas-app): ${colors.reset}`);
        rl.close();
    }

    if (!projectName) {
        console.error(`${colors.bold}Project name is required.${colors.reset}`);
        process.exit(1);
    }

    const slug = projectName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    const currentDir = process.cwd();

    console.log(`${colors.gray}Setting up ${slug} in ${currentDir}...${colors.reset}\n`);

    // 0. Remove original git history to start fresh (Cross-platform)
    const gitDir = path.join(currentDir, '.git');
    if (fs.existsSync(gitDir)) {
        console.log(`${colors.cyan}🧹 Cleaning up starter repository history...${colors.reset}`);
        fs.rmSync(gitDir, { recursive: true, force: true });
    }

    console.log(`${colors.cyan}📦 Configuring project structure...${colors.reset}`);

    // 2. Setup Environment Variables
    const envPath = path.join(process.cwd(), '.env');
    const envExamplePath = path.join(process.cwd(), '.env.example');

    if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
        console.log(`${colors.cyan}📝 Creating .env file...${colors.reset}`);
        let envContent = fs.readFileSync(envExamplePath, 'utf8');

        if (!envContent.includes('AUTH_SECRET=') || envContent.match(/AUTH_SECRET=["']?["']?\s*$/m)) {
            const secret = require('crypto').randomBytes(32).toString('base64');
            envContent = envContent.replace(/AUTH_SECRET=.*$/m, `AUTH_SECRET="${secret}"`);
        }

        fs.writeFileSync(envPath, envContent);
    }

    // 3. Generate AGENTS.md for AI Context
    console.log(`${colors.cyan}🤖 Generating AI Agent context (AGENTS.md)...${colors.reset}`);
    let agentsMdContent = fs.readFileSync(path.join(process.cwd(), '.agents', 'AGENTS.md'), 'utf8');

    const projectContext = `
# Current Project Context
- **Project Name**: ${projectName}
- **Description**: ${description || 'Not specified'}
- **Target Audience**: ${audience || 'Not specified'}
- **Key Features**: ${features || 'Not specified'}

---

`;
    fs.writeFileSync(path.join(process.cwd(), 'AGENTS.md'), projectContext + agentsMdContent);

    // 4. Setup Knowledge Graph
    console.log(`${colors.cyan}🧠 Linking Knowledge Graph outputs...${colors.reset}`);
    const kgDir = path.join(process.cwd(), '.agents', 'knowledge-graph');
    if (!fs.existsSync(kgDir)) {
        fs.mkdirSync(kgDir, { recursive: true });
    }

    try {
        const outDir = path.join(process.cwd(), '.graphify');
        if (fs.existsSync(outDir)) {
            if (fs.existsSync(path.join(outDir, 'graph.json'))) {
                fs.copyFileSync(path.join(outDir, 'graph.json'), path.join(kgDir, 'graph.json'));
            }
            if (fs.existsSync(path.join(outDir, 'GRAPH_REPORT.md'))) {
                fs.copyFileSync(path.join(outDir, 'GRAPH_REPORT.md'), path.join(kgDir, 'GRAPH_REPORT.md'));
            }
        }

        fs.writeFileSync(path.join(kgDir, 'README.md'), `# Knowledge Graph
This directory contains Graphify AST outputs. 
- \`graph.json\`: The full syntax tree and dependency graph.
- \`GRAPH_REPORT.md\`: Community clusters and structural analysis.
AI Agents: Read these files to understand the complete codebase structure without token burn.
`);
    } catch (e) {
        // Silent catch for missing graph files during initial setup
    }

    console.log(`\n${colors.boldGreen}✅ Setup Complete! Your codebase is fully scaffolded.${colors.reset}\n`);

    // Create OSC 8 clickable link for VS Code
    const vscodeLink = `\x1b]8;;vscode://file/${currentDir.replace(/\\/g, '/')}\x1b\\[Open in VS Code]\x1b]8;;\x1b\\`;

    console.log(`${colors.bold}Next steps:${colors.reset}`);
    console.log(`1. ${colors.boldGreen}IMPORTANT:${colors.reset} Open the newly created \`${slug}\` folder directly in your IDE.`);
    console.log(`   (This ensures your AI Agent can detect the local workspace skills like \`/onboard\`).`);
    console.log(`   ${colors.cyan}UI Editors:${colors.reset} Click 👉 ${vscodeLink}, or type \`cursor .\` or \`antigravity-ide .\` in this terminal.`);
    console.log(`   ${colors.cyan}CLI Agents:${colors.reset} Type \`claude\`, \`opencode\`, or \`agy\` directly in this terminal.`);
    console.log(`2. Read the ${colors.cyan}docs/NEXT-STEPS.md${colors.reset} guide for instructions on configuring your environment variables.`);
    console.log(`3. Copy and paste the prompt below into your AI Agent:\n`);

    console.log(colors.gray + '======================================================================' + colors.reset);
    console.log(colors.yellow + '🚀 AI AGENT ONBOARDING PROMPT - COPY BELOW THIS LINE 🚀' + colors.reset);
    console.log(colors.gray + '======================================================================' + colors.reset);
    console.log(`Hello! I just scaffolded this Next.js SaaS starter kit and I want you to help me build my idea: "${projectName}".

Before we write any code, please run the following command to gain full zero-token context of this codebase:

/onboard

Once you have run the command and read the architecture, confirm that you understand the codebase and are ready to adopt your specialized roles to start building my SaaS idea!`);
    console.log(colors.gray + '======================================================================\n' + colors.reset);

    console.log(`${colors.boldGreen}✨ Your ShipOnClick has been successfully shipped! Happy Shipping:) ✨${colors.reset}\n`);
}

main().catch(console.error);
