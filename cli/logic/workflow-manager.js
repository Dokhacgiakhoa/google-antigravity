/**
 * Logic for assembling Workflows from various sources (Scale, Product, Industry).
 */

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

function getWorkflows(industryDomain, productType, scaleWorkflows) {
    const finalWorkflows = new Set(scaleWorkflows);
    const specificWorkflows = industryWorkflows[industryDomain] || ['create', 'debug', 'enhance'];

    // Add Industry-specific workflows
    if (specificWorkflows && Array.isArray(specificWorkflows)) {
        specificWorkflows.forEach(w => {
            if (availableWorkflows.includes(w)) {
                finalWorkflows.add(w);
            }
        });
    }

    // Implicit Product/Industry Workflows logic
    if (industryDomain === 'personal' || industryDomain === 'fnb' || productType === 'web_app' || productType === 'pwa') {
        finalWorkflows.add('ui-ux-pro-max');
    }
    if (industryDomain === 'finance' || industryDomain === 'healthcare' || productType === 'ai_agent' || productType === 'chatbot') {
        finalWorkflows.add('orchestrate');
    }
    if (['logistics', 'other'].includes(industryDomain) || ['cli_tool', 'api_service'].includes(productType)) {
        finalWorkflows.add('create');
    }
    if (productType === 'api_service') {
        finalWorkflows.add('api');
    }
    if (productType === 'mobile_app' || productType === 'game') {
        finalWorkflows.add('mobile');
    }
    if (productType === 'template') {
        finalWorkflows.add('seo');
    }

    return Array.from(finalWorkflows);
}

module.exports = { getWorkflows, availableWorkflows };
