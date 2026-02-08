#!/usr/bin/env node

/**
 * Google Antigravity CLI
 * Create AI Agent projects with interactive setup
 */

const { program } = require('commander');
const { createProject } = require('./create');
const { initProject } = require('./init');
const packageJson = require('../package.json');
const { checkAndApplyUpdates } = require('./lib/auto-update');

// Run update check before program
(async () => {
    if (!process.env.ANTIGRAVITY_SKIP_UPDATE) {
        await checkAndApplyUpdates(packageJson);
    }

    program
      .name('antigravity-ide')
      .description('The Unified AI Engineering Tool: Create, Update, Repair, and Fix projects')
      .version(packageJson.version)
      .argument('[project-name]', 'Name of the project (if exists, will Repair/Update)', '.')
      .option('-t, --template <type>', 'Project template (minimal, standard, full)', 'standard')
      .option('-s, --skip-prompts', 'Skip interactive prompts and use defaults')
      .option('-f, --force', 'Force overwrite/restore files during Repair')
      .action(async (projectName, options) => {
        await createProject(projectName, options);
      });

    program
      .command('init')
      .description('Alias for the root command: Initialize or Repair project')
      .action(async (options) => {
        // Just run createProject in current dir - it handles existing projects via Repair mode
        await createProject('.', options);
      });

    program
      .command('update')
      .description('Sync and Repair the current project with the latest global standards')
      .action(async (options) => {
        await createProject('.', { ...options, force: true });
      });

    program.parse(process.argv);
})();
