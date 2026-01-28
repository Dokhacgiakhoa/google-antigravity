/**
 * Interactive prompts for project configuration
 */

const prompts = require('prompts');
const chalk = require('chalk');
const gradient = require('gradient-string');

// Display concise banner with gradient
function displayBanner() {
  console.clear();
  console.log('');
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log(gradient.pastel.multiline('  █████╗ ███╗   ██╗████████╗██╗ ██████╗ ██████╗  █████╗ '));
  console.log(gradient.pastel.multiline('  ██╔══██╗████╗  ██║╚══██╔══╝██║██╔════╝ ██╔══██╗██╔══██╗'));
  console.log(gradient.pastel.multiline('  ███████║██╔██╗ ██║   ██║   ██║██║  ███╗██████╔╝███████║'));
  console.log(gradient.pastel.multiline('  ██╔══██║██║╚██╗██║   ██║   ██║██║   ██║██╔══██╗██╔══██║'));
  console.log(gradient.pastel.multiline('  ██║  ██║██║ ╚████║   ██║   ██║╚██████╔╝██║  ██║██║  ██║'));
  console.log(gradient.pastel.multiline('  ╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝'));
  console.log(chalk.gray('  AI Agent IDE • v3.0.0'));
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log('');
}

const skillCategories = {
  webdev: {
    name: 'Web Development',
    skills: [
      'nextjs-react-expert',
      'typescript-expert',
      'tailwind-design-system',
      'api-design-principles',
      'frontend-design',
      'backend-patterns'
    ]
  },
  mobile: {
    name: 'Mobile Development',
    skills: [
      'react-native-architecture',
      'flutter-expert',
      'mobile-design',
      'ios-developer',
      'mobile-security-coder'
    ]
  },
  devops: {
    name: 'DevOps & Cloud',
    skills: [
      'kubernetes-architect',
      'terraform-specialist',
      'docker-expert',
      'cicd-automation-workflow-automate',
      'deployment-engineer'
    ]
  },
  security: {
    name: 'Security & Testing',
    skills: [
      'security-auditor',
      'tdd-orchestrator',
      'test-automator',
      'vulnerability-scanner',
      'penetration-testing'
    ]
  },
  ai: {
    name: 'AI & ML',
    skills: [
      'ai-engineer',
      'ml-engineer',
      'prompt-engineer',
      'rag-engineer',
      'llm-app-patterns'
    ]
  },
  data: {
    name: 'Data Engineering',
    skills: [
      'data-engineer',
      'sql-pro',
      'database-architect',
      'data-quality-frameworks',
      'spark-optimization'
    ]
  }
};

async function getProjectConfig(skipPrompts = false) {
  if (skipPrompts) {
    return {
      projectName: 'my-agent-project',
      template: 'standard',
      rules: 'balanced',
      skillCategories: ['webdev'],
      workflows: ['git', 'testing'],
      includeDashboard: true,
      packageManager: 'npm'
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  const response = await prompts([
    {
      type: 'text',
      name: 'projectName',
      message: 'Project name:',
      initial: 'my-agent-project',
      validate: (value) => {
        if (!/^[a-z0-9-_]+$/.test(value)) {
          return 'Project name can only contain lowercase letters, numbers, hyphens, and underscores';
        }
        return true;
      }
    },
    {
      type: 'select',
      name: 'template',
      message: 'Choose project template:',
      choices: [
        { title: 'Minimal - Basic .agent structure only', value: 'minimal' },
        { title: 'Standard - .agent + selected skills (Recommended)', value: 'standard' },
        { title: 'Full - Everything (all skills, lab, test suite)', value: 'full' }
      ],
      initial: 1
    },
    {
      type: 'select',
      name: 'rules',
      message: 'Agent behavior rules:',
      choices: [
        { title: 'Strict - Maximum safety, requires approval for most actions', value: 'strict' },
        { title: 'Balanced - Good mix of autonomy and safety (Recommended)', value: 'balanced' },
        { title: 'Flexible - High autonomy, minimal restrictions', value: 'flexible' }
      ],
      initial: 1
    },
    {
      type: (prev, values) => values.template !== 'minimal' ? 'multiselect' : null,
      name: 'skillCategories',
      message: 'Select skill categories to include:',
      choices: Object.entries(skillCategories).map(([key, { name }]) => ({
        title: name,
        value: key,
        selected: key === 'webdev'
      })),
      hint: 'Space to select, Enter to confirm'
    },
    {
      type: 'multiselect',
      name: 'workflows',
      message: 'Select workflows to include:',
      choices: [
        { title: 'Git Workflows - Branch management, commits, PRs', value: 'git', selected: true },
        { title: 'Testing - TDD, unit tests, E2E tests', value: 'testing', selected: true },
        { title: 'Deployment - CI/CD, production workflows', value: 'deployment', selected: false },
        { title: 'Code Review - Automated review workflows', value: 'review', selected: false }
      ],
      hint: 'Space to select, Enter to confirm'
    },
    {
      type: 'confirm',
      name: 'includeDashboard',
      message: 'Include Web Dashboard (Next.js)?',
      initial: true
    },
    {
      type: 'select',
      name: 'packageManager',
      message: 'Package manager:',
      choices: [
        { title: 'npm', value: 'npm' },
        { title: 'pnpm', value: 'pnpm' },
        { title: 'yarn', value: 'yarn' }
      ],
      initial: 0
    }
  ]);

  return response;
}

function getSkillsForCategories(categories) {
  const skills = [];
  categories.forEach(category => {
    if (skillCategories[category]) {
      skills.push(...skillCategories[category].skills);
    }
  });
  return skills;
}

module.exports = {
  getProjectConfig,
  getSkillsForCategories,
  skillCategories
};
