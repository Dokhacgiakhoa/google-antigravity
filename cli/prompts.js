const prompts = require('prompts');
const chalk = require('chalk');
const gradient = require('gradient-string');
const packageJson = require('../package.json');

// Import Logic Modules
const { skillCategories, getSkillsForCategories } = require('./logic/skill-definitions');
const { getScaleConfig } = require('./logic/scale-rules');
const { getProductSkills } = require('./logic/product-skills');
const { getWorkflows } = require('./logic/workflow-manager');

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
      engineMode: 'standard',
      productType: 'user_app', // Default
      industryDomain: 'other' // Default
    };
  }

  // Display beautiful banner
  displayBanner();

  console.log(chalk.bold.cyan('🚀 Project Setup Wizard\n'));
  console.log(chalk.gray('Answer a few questions to configure your AI Agent project...\n'));

  /* 
    PHASE 1: BASIC INFORMATION
    Order: Language -> Name -> Scale -> ProductType -> Agent Name
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
        { title: '📱 User Application (App/Web/Mobile/Desktop)', value: 'user_app' },
        { title: '🛠️ Developer Tool (CLI/Library/API)', value: 'dev_tool' },
        { title: '🤖 AI Agent (Chatbot/Automation)', value: 'ai_agent' },
        { title: '🎨 Digital Asset (Game/Template/Media)', value: 'digital_asset' }
      ] : [
        { title: '📱 User Application (App/Web/Mobile/Desktop)', value: 'user_app' },
        { title: '🛠️ Developer Tool (CLI/Library/API)', value: 'dev_tool' },
        { title: '🤖 AI Agent (Chatbot/Automation)', value: 'ai_agent' },
        { title: '🎨 Digital Asset (Game/Template/Media)', value: 'digital_asset' }
      ],
      initial: 0
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
  console.log(`\n${chalk.green('✔')} Setup Complete! Generating Project Plan...`);
  if (predefinedName) {
    responses.projectName = predefinedName;
  }

  // Default Industry to 'other' (General / All Fields)
  responses.industryDomain = 'other';

  // --- LOGIC INTEGRATION START ---

  // 1. Get Scale Configuration (Engine, Rules, Core Skills)
  const scaleConfig = getScaleConfig(responses.scale);

  // 2. Get Product Skills
  const productSkills = getProductSkills(responses.productType);

  // 3. Combine Skills (Core + Product)
  const allSkills = new Set([...scaleConfig.coreSkillCategories, ...productSkills]);

  // 4. Get Workflows (combined from Scale and Product/Industry)
  const finalWorkflows = getWorkflows(
      responses.industryDomain, 
      responses.productType, 
      scaleConfig.baseWorkflows
  );

  const settings = {
    template: 'standard',
    rules: scaleConfig.rulesMode,
    workflows: finalWorkflows,
    packageManager: 'npm',
    engineMode: scaleConfig.engineMode,
    productType: responses.productType
  };
  
  // Return configuration
  return { ...responses, ...settings, skillCategories: Array.from(allSkills) };
}

module.exports = {
  getProjectConfig,
  getSkillsForCategories,
  skillCategories
};
