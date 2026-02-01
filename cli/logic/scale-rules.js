/**
 * Logic for Project Scale (Flexible vs Balanced vs Strict)
 * Determines Engine Mode, Rules Mode, and Base Workflows.
 */

function getScaleConfig(scale) {
    let engineMode = 'standard';
    let rulesMode = scale;
    let baseWorkflows = [];
    let coreSkillCategories = []; // Skills enforced by Scale (e.g. Enterprise needs Security)

    if (scale === 'flexible') { 
        // PERSONAL: JS only, Minimal
        engineMode = 'standard'; 
        baseWorkflows = ['plan', 'debug', 'enhance']; 
        coreSkillCategories = ['ai']; // Only minimal AI
    } else if (scale === 'balanced') { 
        // TEAM: JS + Python, Hybrid
        engineMode = 'advanced'; 
        baseWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard'];
        coreSkillCategories = ['ai', 'growth', 'devops', 'testing'];
    } else { 
        // ENTERPRISE: Full Power
        engineMode = 'advanced'; 
        baseWorkflows = ['plan', 'status', 'debug', 'enhance', 'test', 'document', 'onboard', 'security', 'audit', 'monitor', 'orchestrate', 'deploy'];
        coreSkillCategories = ['ai', 'security', 'growth', 'devops', 'testing'];
    }

    return {
        engineMode,
        rulesMode,
        baseWorkflows,
        coreSkillCategories
    };
}

module.exports = { getScaleConfig };
