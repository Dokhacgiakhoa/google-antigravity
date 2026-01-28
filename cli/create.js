/**
 * Project creation logic
 */

const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const { getProjectConfig, getSkillsForCategories } = require('./prompts');
const gradient = require('gradient-string');

async function createProject(projectName, options) {
  try {
    // Get configuration
    const config = await getProjectConfig(options.skipPrompts);
    
    // Use provided project name or prompt value
    const finalProjectName = projectName || config.projectName;
    const projectPath = path.resolve(process.cwd(), finalProjectName);

    // Check if directory exists
    if (fs.existsSync(projectPath)) {
      console.error(chalk.red(`\n❌ Directory "${finalProjectName}" already exists.\n`));
      process.exit(1);
    }

    console.log('\n');
    console.log(gradient.cristal('━'.repeat(60)));
    console.log(chalk.bold('  📦 Creating AI Agent Project'));
    console.log(gradient.cristal('━'.repeat(60)));
    console.log('');

    // Create project directory
    const spinner = ora('Creating project structure...').start();
    fs.mkdirSync(projectPath, { recursive: true });

    // Copy base structure
    await copyBaseStructure(projectPath, config);
    spinner.succeed('Project structure created');

    // Copy selected skills
    if (config.template !== 'minimal' && config.skillCategories?.length > 0) {
      spinner.start('Installing selected skills...');
      await copySkills(projectPath, config.skillCategories);
      spinner.succeed(`Installed ${config.skillCategories.length} skill categories`);
    }

    // Copy workflows
    if (config.workflows?.length > 0) {
      spinner.start('Setting up workflows...');
      await copyWorkflows(projectPath, config.workflows);
      spinner.succeed(`Configured ${config.workflows.length} workflows`);
    }

    // Copy dashboard
    if (config.includeDashboard) {
      spinner.start('Setting up Web Dashboard...');
      await copyDashboard(projectPath);
      spinner.succeed('Dashboard ready');
    }

    // Generate configuration files
    spinner.start('Generating configuration files...');
    await generateConfigs(projectPath, config);
    spinner.succeed('Configuration files created');

    // Initialize git
    spinner.start('Initializing git repository...');
    try {
      execSync('git init', { cwd: projectPath, stdio: 'ignore' });
      spinner.succeed('Git repository initialized');
    } catch (error) {
      spinner.warn('Git initialization skipped (git not found)');
    }

    // Print success message
    printSuccessMessage(finalProjectName, config);

  } catch (error) {
    console.error(chalk.red('\n❌ Error creating project:'), error.message);
    process.exit(1);
  }
}

async function copyBaseStructure(projectPath, config) {
  const sourcePath = path.join(__dirname, '..', 'cli', 'templates', config.template);
  
  // Create base .agent directory
  const agentDir = path.join(projectPath, '.agent');
  fs.mkdirSync(agentDir, { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'agents'), { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'skills'), { recursive: true });
  fs.mkdirSync(path.join(agentDir, 'workflows'), { recursive: true });

  // Copy GEMINI.md based on rules
  const geminiContent = generateGeminiMd(config.rules);
  fs.writeFileSync(path.join(agentDir, 'GEMINI.md'), geminiContent);

  // Copy basic files
  const files = ['README.md', 'LICENSE', 'COPYRIGHT.md', '.gitignore'];
  const rootDir = path.join(__dirname, '..');
  
  files.forEach(file => {
    const source = path.join(rootDir, file);
    const dest = path.join(projectPath, file);
    if (fs.existsSync(source)) {
      fs.copyFileSync(source, dest);
    }
  });
}

async function copySkills(projectPath, categories) {
  const skillsSourceDir = path.join(__dirname, '..', '.agent', 'skills');
  const skillsDestDir = path.join(projectPath, '.agent', 'skills');
  
  const selectedSkills = getSkillsForCategories(categories);
  
  for (const skill of selectedSkills) {
    const skillPath = path.join(skillsSourceDir, skill);
    if (fs.existsSync(skillPath)) {
      const destPath = path.join(skillsDestDir, skill);
      await fs.copy(skillPath, destPath);
    }
  }
}

async function copyWorkflows(projectPath, workflows) {
  const workflowsSourceDir = path.join(__dirname, '..', '.agent', 'workflows');
  const workflowsDestDir = path.join(projectPath, '.agent', 'workflows');
  
  for (const workflow of workflows) {
    const workflowFile = `${workflow}.md`;
    const source = path.join(workflowsSourceDir, workflowFile);
    if (fs.existsSync(source)) {
      await fs.copy(source, path.join(workflowsDestDir, workflowFile));
    }
  }
}

async function copyDashboard(projectPath) {
  const dashboardSource = path.join(__dirname, '..', 'web');
  const dashboardDest = path.join(projectPath, 'web');
  
  if (fs.existsSync(dashboardSource)) {
    await fs.copy(dashboardSource, dashboardDest, {
      filter: (src) => {
        // Skip node_modules and .next
        return !src.includes('node_modules') && !src.includes('.next');
      }
    });
  }
}

async function generateConfigs(projectPath, config) {
  // Generate package.json
  const packageJson = {
    name: config.projectName,
    version: '1.0.0',
    description: 'AI Agent project powered by Google Antigravity',
    private: true,
    scripts: {
      dev: config.includeDashboard ? 'cd web && npm run dev' : 'echo "No dev server configured"',
      build: config.includeDashboard ? 'cd web && npm run build' : 'echo "No build script"'
    },
    keywords: ['ai', 'agent', 'google-antigravity'],
    author: '',
    license: 'MIT'
  };
  
  fs.writeFileSync(
    path.join(projectPath, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Generate .editorconfig
  const editorConfig = `root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
`;
  fs.writeFileSync(path.join(projectPath, '.editorconfig'), editorConfig);
}

function generateGeminiMd(rules) {
  const strictness = {
    strict: {
      autoRun: 'false',
      confirmLevel: 'Ask before every file modification and command execution'
    },
    balanced: {
      autoRun: 'true for safe read operations',
      confirmLevel: 'Ask before destructive operations'
    },
    flexible: {
      autoRun: 'true',
      confirmLevel: 'Minimal confirmation, high autonomy'
    }
  };

  const config = strictness[rules] || strictness.balanced;

  return `---
trigger: always_on
---

# GEMINI.md - Agent Configuration

This file controls the behavior of your AI Agent.

## Agent Behavior Rules: ${rules.toUpperCase()}

**Auto-run Commands**: ${config.autoRun}
**Confirmation Level**: ${config.confirmLevel}

## Core Capabilities

Your agent has access to:
- File operations (read, write, search)
- Terminal commands
- Web browsing
- Code analysis and refactoring
- Testing and debugging

## Custom Instructions

Add your project-specific instructions here.

---
*Generated by Google Antigravity*
`;
}

function printSuccessMessage(projectName, config) {
  console.log('\n');
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log(gradient.morning.multiline('  ✓ SUCCESS! Project Ready'));
  console.log(gradient.rainbow('━'.repeat(60)));
  
  // Concise config display
  console.log('');
  console.log(chalk.bold('📋 Config'));
  console.log(chalk.gray('  Project:   ') + gradient.cristal(projectName));
  console.log(chalk.gray('  Template:  ') + chalk.cyan(config.template));
  console.log(chalk.gray('  Skills:    ') + chalk.cyan(config.skillCategories?.join(', ') || 'none'));
  console.log(chalk.gray('  Dashboard: ') + (config.includeDashboard ? chalk.green('✓') : chalk.gray('—')));
  
  // Next steps - super concise
  console.log('');
  console.log(gradient.teen('━'.repeat(60)));
  console.log(chalk.bold('🚀 Run'));
  console.log(gradient.passion(`  cd ${projectName} && cd web && npm install && npm run dev`));
  console.log(gradient.teen('━'.repeat(60)));
  console.log('');
}

module.exports = {
  createProject
};
