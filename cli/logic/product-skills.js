/**
 * Logic for Product Type (User Apps, Dev Tools, AI, Assets)
 * Determines specific Skills needed for the product.
 */

function getProductSkills(productType) {
    const skillsToAdd = new Set();

    // 1. User Applications
    if (['web_app', 'pwa', 'desktop', 'extension', 'template'].includes(productType)) {
        skillsToAdd.add('webdev');
    }
    if (['web_app', 'pwa', 'desktop'].includes(productType)) {
        skillsToAdd.add('testing'); // Apps need QA
    }
    if (productType === 'mobile_app' || productType === 'game') {
        skillsToAdd.add('mobile');
    }

    // 2. Dev Tools
    if (['cli_tool', 'library', 'api_service'].includes(productType)) {
        skillsToAdd.add('devops');
        skillsToAdd.add('testing'); // Tools need robust testing
    }

    // 3. AI Agents
    if (['chatbot', 'ai_agent'].includes(productType)) {
        skillsToAdd.add('ai');
    }
    if (productType === 'chatbot') {
        skillsToAdd.add('maker'); // For Telegram bot builder etc.
    }

    return Array.from(skillsToAdd);
}

module.exports = { getProductSkills };
