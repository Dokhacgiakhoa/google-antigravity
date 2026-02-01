/**
 * Interactive prompts for project configuration
 */

const prompts = require('prompts');
const chalk = require('chalk');
const gradient = require('gradient-string');
const packageJson = require('../package.json');

// Display concise banner with gradient
function displayBanner() {
  console.clear();
  console.log('');
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log(gradient.pastel.multiline('    ___          __  _ ______                 _ __       '));
  console.log(gradient.pastel.multiline('   /   |  ____  / /_(_) ____/________ __   __(_) /___  __'));
  console.log(gradient.pastel.multiline('  / /| | / __ \\/ __/ / / __/ ___/ __ `/ | / / / __/ / / /'));
  console.log(gradient.pastel.multiline(' / ___ |/ / / / /_/ / /_/ / /  / /_/ /| |/ / / /_/ /_/ / '));
  console.log(gradient.pastel.multiline('/_/  |_/_/ /_/\\__/_/\\____/_/   \\__,_/ |___/_/\\__/\\__, /  '));
  console.log(gradient.pastel.multiline('                                                 /____/   '));
  console.log(chalk.gray(`  Google Antigravity • v${packageJson.version}`));
  console.log(chalk.gray('  Developed with 💡 by Dokhacgiakhoa'));
  console.log(gradient.rainbow('━'.repeat(60)));
  console.log('');
}

const skillCategories = {
  webdev: {
    name: 'Web High-Performance',
    skills: [
      'modern-web-architect',
      'full-stack-scaffold',
      'api-documenter',
      'i18n-localization'
    ]
  },
  mobile: {
    name: 'Mobile & Game',
    skills: [
      'mobile-design',
      'game-development',
      'i18n-localization'
    ]
  },
  devops: {
    name: 'DevOps & Cloud',
    skills: [
      'cloud-architect-master',
      'deployment-engineer',
      'incident-responder',
      'mcp-builder'
    ]
  },
  security: {
    name: 'Security & Audit',
    skills: [
      'security-auditor',
      'penetration-tester-master',
      'production-code-audit',
      'vulnerability-scanner'
    ]
  },
  ai: {
    name: 'AI & ML',
    skills: [
      'ai-engineer',
      'geo-fundamentals',
      'prompt-engineer'
    ]
  },
  growth: {
    name: 'Growth & Data',
    skills: [
      'cro-expert-kit',
      'seo-expert-kit',
      'database-migration',
      'performance-engineer'
    ]
  }
};

async function getProjectConfig(skipPrompts = false, predefinedName = null) {
  if (skipPrompts) {
    return {
      projectName: predefinedName || 'my-agent-project',
      template: 'standard',
      rules: 'balanced',
      skillCategories: ['webdev'],
      workflows: ['git', 'testing'],
      includeDashboard: false,
      language: 'en',
      packageManager: 'npm',
      engineMode: 'standard'
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  /* 
    PHASE 1: BASIC INFORMATION
    Order: Language -> Name -> Scale -> Industry -> Agent Name
  */
  const responses = await prompts([
    {
      type: 'select',
      name: 'language',
      message: 'Select Language / Chọn ngôn ngữ:',
      choices: [
        { title: '1. English', value: 'en' },
        { title: '2. Tiếng Việt', value: 'vi' }
      ],
      initial: 1
    },
    {
      type: predefinedName ? null : 'text',
      name: 'projectName',
      message: (prev, values) => values.language === 'vi' ? 'Tên dự án (Project name):' : 'Project name:',
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
      name: 'scale', // Maps to 'rules'
      message: (prev, values) => values.language === 'vi' ? 'Quy mô dự án:' : 'Project Scale:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '👤 Cá nhân (Personal) - Cơ chế linh hoạt, tự chủ', value: 'flexible' },
        { title: '👥 Team (Nhóm) - Cân bằng, hỏi trước khi sửa file', value: 'balanced' },
        { title: '🏢 Doanh nghiệp (Enterprise) - Nghiêm ngặt, kiểm soát 100%', value: 'strict' }
      ] : [
        { title: '👤 Personal - Flexible, High Autonomy', value: 'flexible' },
        { title: '👥 Team - Balanced, Confirm core changes', value: 'balanced' },
        { title: '🏢 Enterprise - Strict, 100% Control', value: 'strict' }
      ],
      initial: 0
    },
    {
      type: 'select',
      name: 'productType',
      message: (prev, values) => values.language === 'vi' ? 'Loại sản phẩm (Product Type):' : 'Select Product Type:',
      choices: (prev, values) => values.language === 'vi' ? [
        { title: '──────── USER APPS ────────', disabled: true },
        { title: '🌐 Web App (Dashboard, SaaS, SME)', value: 'web_app' },
        { title: '⚡ PWA (App giả lập trên Web)', value: 'pwa' },
        { title: '🖥️ Desktop App (Windows/MacOS)', value: 'desktop' },
        { title: '📱 Mobile App (iOS/Android)', value: 'mobile_app' },
        { title: '🧩 Browser Extension (Chrome/Edge)', value: 'extension' },
        
        { title: '──────── DEV TOOLS ────────', disabled: true },
        { title: '⌨️ CLI Tool (Terminal Command)', value: 'cli_tool' },
        { title: '📦 Library / Package (NPM)', value: 'library' },
        { title: '🔌 API Service (Backend Only)', value: 'api_service' },

        { title: '──────── AI AGENTS ────────', disabled: true },
        { title: '💬 Chatbot / Assistant (Telegram/Discord)', value: 'chatbot' },
        { title: '🤖 Autonomous Agent (Tự động hóa)', value: 'ai_agent' },

        { title: '──────── ASSETS ────────', disabled: true },
        { title: '🎮 Interactive Game (Web/Mobile)', value: 'game' },
        { title: '🎨 Template / Theme', value: 'template' }
      ] : [
        { title: '──────── USER APPS ────────', disabled: true },
        { title: '🌐 Web App (SaaS, Dashboard)', value: 'web_app' },
        { title: '⚡ PWA (Progressive Web App)', value: 'pwa' },
        { title: '🖥️ Desktop App (Electron/Tauri)', value: 'desktop' },
        { title: '📱 Mobile App (iOS/Android)', value: 'mobile_app' },
        { title: '🧩 Browser Extension', value: 'extension' },

        { title: '──────── DEV TOOLS ────────', disabled: true },
        { title: '⌨️ CLI Tool', value: 'cli_tool' },
        { title: '📦 Library / Package', value: 'library' },
        { title: '🔌 API Service (Backend)', value: 'api_service' },

        { title: '──────── AI AGENTS ────────', disabled: true },
        { title: '💬 Chatbot / Assistant', value: 'chatbot' },
        { title: '🤖 Autonomous Agent', value: 'ai_agent' },

        { title: '──────── ASSETS ────────', disabled: true },
        { title: '🎮 Interactive Game', value: 'game' },
        { title: '🎨 Template / Theme', value: 'template' }
      ],
      initial: 1
    },
    {
      type: 'text',
      name: 'agentName',
      message: (prev, values) => values.language === 'vi' ? 'Đặt tên cho Agent (VD: Jarvis, Friday):' : 'Name your Agent (e.g., Jarvis, Friday):',
      validate: (value) => value.length < 2 ? (process.env.LANG?.includes('vi') ? 'Tên Agent phải có ít nhất 2 ký tự' : 'Name must be at least 2 characters long') : true
    }
  ], {
    onCancel: () => {
      console.log(chalk.red('\n✖ Operation cancelled'));
      process.exit(0);
    }
  });
  
  // Inject predefined name if it exists (so logic downstream works)
  if (predefinedName) {
    responses.projectName = predefinedName;
  }

  // Default Industry to 'other' (General / All Fields) since prompt was removed
  responses.industryDomain = 'other';

  // PRESETS CONFIGURATION
  const baseWorkflows = ['git', 'plan', 'status'];
  
  // Define available industry-specific workflows 
  const availableWorkflows = [
    'audit', 'brainstorm', 'create', 'debug', 'deploy', 'document', 'enhance', 
    'monitor', 'onboard', 'orchestrate', 'plan', 'preview', 'security', 'seo', 
    'status', 'test', 'ui-ux-pro-max',
    'explain', 'visually', 'mobile', 'performance', 'compliance', 'api', 'realtime', 'blog', 'portfolio'
  ];

  const industryWorkflows = {
    finance: ['security', 'audit', 'test'],
    education: ['explain', 'visually', 'test'],
    fnb: ['performance', 'mobile', 'deploy'],
    personal: ['blog', 'portfolio', 'seo'],
    healthcare: ['compliance', 'security', 'audit'],
    logistics: ['api', 'realtime', 'deploy'],
    other: availableWorkflows // 'Other' now means EVERYTHING (General / All Fields)
  };

  // Determine Engine Mode and Workflows based on Scale
  let engineMode = 'standard';
  let selectedSkillCategories = new Set(['ai']); // AI is always core
  let scaleBasedWorkflows = [];

  // SCALE LOGIC
  if (responses.scale === 'flexible') { 
      // PERSONAL: JS only, Minimal
      engineMode = 'standard'; 
      scaleBasedWorkflows = ['plan', 'debug', 'enhance']; 
  } else if (responses.scale === 'balanced') { 
      // TEAM: JS + Python, Hybrid
      engineMode = 'advanced'; 
      selectedSkillCategories.add('growth');
      selectedSkillCategories.add('devops');
      scaleBasedWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard'];
  } else { 
      // ENTERPRISE: Full Power
      engineMode = 'advanced'; 
      selectedSkillCategories.add('security');
      selectedSkillCategories.add('growth');
      selectedSkillCategories.add('devops');
      scaleBasedWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard', 'security', 'audit', 'monitor', 'orchestrate', 'deploy'];
  }

  // PRODUCT TYPE LOGIC
  const type = responses.productType;
  
  // 1. User Applications
  if (['web_app', 'pwa', 'desktop', 'extension', 'template'].includes(type)) {
    selectedSkillCategories.add('webdev');
  }
  if (type === 'mobile_app' || type === 'game') {
    selectedSkillCategories.add('mobile'); // 'game' falls under mobile skills (game-development)
  }

  // 2. Dev Tools
  if (['cli_tool', 'library', 'api_service'].includes(type)) {
    selectedSkillCategories.add('devops'); // Logic for publishing/CI
    // Implicitly backend focused
  }

  // 3. AI Agents
  if (['chatbot', 'ai_agent'].includes(type)) {
    // Standard AI skills already added
    // Maybe add more specific ones later
  }

  const specificWorkflows = industryWorkflows[responses.industryDomain] || ['create', 'debug', 'enhance'];
  const finalWorkflows = new Set(scaleBasedWorkflows);

  // Add industry-specific workflows
  if (specificWorkflows && Array.isArray(specificWorkflows)) {
    specificWorkflows.forEach(w => {
      if (availableWorkflows.includes(w)) {
        finalWorkflows.add(w);
      }
    });
  }

  // Implicit industry/product workflows
  if (responses.industryDomain === 'personal' || responses.industryDomain === 'fnb' || type === 'web_app' || type === 'pwa') {
    finalWorkflows.add('ui-ux-pro-max');
  }
  if (responses.industryDomain === 'finance' || responses.industryDomain === 'healthcare' || type === 'ai_agent' || type === 'chatbot') {
    finalWorkflows.add('orchestrate');
  }
  if (['logistics', 'other'].includes(responses.industryDomain) || ['cli_tool', 'api_service'].includes(type)) {
    finalWorkflows.add('create');
  }
  if (type === 'api_service') {
    finalWorkflows.add('api');
  }
  if (type === 'mobile_app') {
    finalWorkflows.add('mobile');
  }

  const settings = {
    template: 'standard',
    rules: responses.scale,
    workflows: Array.from(finalWorkflows),
    packageManager: 'npm',
    engineMode: engineMode,
    productType: responses.productType
  };
  
  // Return configuration with presets
  return { ...responses, ...settings, skillCategories: Array.from(selectedSkillCategories) };
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
