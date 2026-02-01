/**
 * Centralized definition of all Agent Skills and their categories.
 */

const skillCategories = {
  webdev: {
    name: 'Web High-Performance',
    skills: [
      'modern-web-architect',
      'full-stack-scaffold',
      'api-documenter',
      'i18n-localization',
      'react-best-practices',
      'tailwind-patterns',
      'frontend-design'
    ]
  },
  mobile: {
    name: 'Mobile & Game',
    skills: [
      'mobile-design',
      'game-development',
      'i18n-localization',
      'react-native-patterns'
    ]
  },
  devops: {
    name: 'DevOps & Cloud',
    skills: [
      'cloud-architect-master',
      'deployment-engineer',
      'incident-responder',
      'mcp-builder',
      'docker-expert'
    ]
  },
  security: {
    name: 'Security & Audit',
    skills: [
      'security-auditor',
      'penetration-tester-master',
      'production-code-audit',
      'vulnerability-scanner',
      'owasp-top-10'
    ]
  },
  ai: {
    name: 'AI & ML',
    skills: [
      'ai-engineer',
      'geo-fundamentals',
      'prompt-engineer',
      'voice-ai-engine',
      'rag-architect'
    ]
  },
  growth: {
    name: 'Growth & Data',
    skills: [
      'cro-expert-kit',
      'seo-expert-kit',
      'database-migration',
      'performance-engineer',
      'copywriting-master',
      'paid-ads-specialist'
    ]
  },
  maker: {
    name: 'Maker & Indie Hacking',
    skills: [
      'telegram-bot-builder',
      'viral-generator',
      'product-hunt-launch',
      'nocode-automation'
    ]
  },
  testing: {
    name: 'QA & Testing',
    skills: [
      'tdd-master-workflow',
      'qa-automation',
      'cypress-testing',
      'jest-expert'
    ]
  }
};

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
  skillCategories,
  getSkillsForCategories
};
