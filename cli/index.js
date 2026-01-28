#!/usr/bin/env node

/**
 * Google Antigravity CLI
 * Create AI Agent projects with interactive setup
 */

const { program } = require('commander');
const { createProject } = require('./create');
const packageJson = require('../package.json');

program
  .name('google-antigravity')
  .description('Create AI Agent projects with skills, rules, and workflows')
  .version(packageJson.version);

program
  .command('create [project-name]')
  .description('Create a new AI Agent project')
  .option('-t, --template <type>', 'Project template (minimal, standard, full)', 'standard')
  .option('-s, --skip-prompts', 'Skip interactive prompts and use defaults')
  .action(async (projectName, options) => {
    await createProject(projectName, options);
  });

program.parse(process.argv);

// Show help if no command provided
if (!process.argv.slice(2).length) {
  program.outputHelp();
}
