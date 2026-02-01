
const prompts = require('prompts');
const { getProjectConfig, skillCategories } = require('../cli/prompts');

// Mock prompts
jest.mock('prompts');

describe('Project Setup 10 Scenarios Verification', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });



// Case 1: VI language, Personal scale, Web App (Default Industry: Other/All)
    test('Case 1: VI / Personal (Flexible) / Web App -> Standard Engine, Limited Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'fin-bot',
            scale: 'flexible',
            productType: 'web_app',
            agentName: 'MoneyJarvis'
        });

        const config = await getProjectConfig();
        
        expect(config.language).toBe('vi');
        expect(config.rules).toBe('flexible'); 
        expect(config.engineMode).toBe('standard'); 
        expect(config.skillCategories).toContain('webdev');
        expect(config.skillCategories).toContain('ai');
        expect(config.skillCategories).not.toContain('mobile');
        expect(config.industryDomain).toBe('other');
        expect(config.workflows).toContain('security'); // From 'other' = all
    });

    // Case 2: EN language, Enterprise scale, Mobile App
    test('Case 2: EN / Enterprise (Strict) / Mobile App -> Advanced Engine, All Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'edu-master',
            scale: 'strict',
            productType: 'mobile_app',
            agentName: 'TeacherAI'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); 
        expect(config.skillCategories).toContain('mobile');
        expect(config.skillCategories).toContain('security');
        expect(config.rules).toBe('strict');
        expect(config.workflows).toContain('explain'); // From 'other' = all
    });

    // Case 3: VI language, Team scale, Game (Device)
    test('Case 3: VI / Team (Balanced) / Game -> Advanced Engine, Mobile Skills', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'game-ai',
            scale: 'balanced',
            productType: 'game',
            agentName: 'ChefBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced'); 
        expect(config.skillCategories).toContain('mobile'); 
        expect(config.skillCategories).toContain('ai');
        expect(config.skillCategories).toContain('devops');
        
        expect(config.rules).toBe('balanced');
        expect(config.workflows).toContain('mobile'); 
    });

    // Case 4: EN language, Personal scale, CLI Tool
    test('Case 4: EN / Personal / CLI Tool -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'cli-app',
            scale: 'flexible',
            productType: 'cli_tool',
            agentName: 'DrStrange'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.skillCategories).toContain('devops'); 
        expect(config.workflows).toContain('create'); 
        expect(config.workflows).toContain('orchestrate'); // From 'other' = all
    });

    // Case 5: VI language, Enterprise scale, API Service
    test('Case 5: VI / Enterprise / API Service -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'ship-fast',
            scale: 'strict',
            productType: 'api_service',
            agentName: 'LogiBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toContain('devops');
        expect(config.workflows).toContain('api'); 
    });

    // Case 6: EN language, Team scale, Desktop App
    test('Case 6: EN / Team / Desktop App -> Advanced Engine, All Workflows', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            projectName: 'random-app',
            scale: 'balanced',
            productType: 'desktop',
            agentName: 'Helper'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.skillCategories).toContain('webdev'); 
        expect(config.workflows).toContain('debug');
        expect(config.workflows).toContain('mobile'); 
    });

    // Case 7: Skip Prompts (Non-interactive mode)
    test('Case 7: Skip Prompts -> Defaults applied', async () => {
        const config = await getProjectConfig(true); 

        expect(config.projectName).toBe('my-agent-project');
        expect(config.engineMode).toBe('standard');
    });

    // Case 8: Predefined Project Name
    test('Case 8: Predefined Name', async () => {
        prompts.mockResolvedValueOnce({
            language: 'en',
            scale: 'balanced',
            productType: 'web_app',
            agentName: 'NamedAgent'
        });

        const config = await getProjectConfig(false, 'cli-provided-name');
        expect(config.projectName).toBe('cli-provided-name');
    });

    // Case 9: VI / Personal / Template
    test('Case 9: VI / Personal / Template -> Standard Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'my-portfolio',
            scale: 'flexible',
            productType: 'template',
            agentName: 'MeBot'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('standard');
        expect(config.skillCategories).toContain('webdev'); 
        expect(config.workflows).toContain('seo'); // From 'other' = all
    });

    // Case 10: VI / Team / Web App
    test('Case 10: VI / Team / Web App -> Advanced Engine', async () => {
        prompts.mockResolvedValueOnce({
            language: 'vi',
            projectName: 'bank-app',
            scale: 'balanced',
            productType: 'web_app',
            agentName: 'Banker'
        });

        const config = await getProjectConfig();

        expect(config.engineMode).toBe('advanced');
        expect(config.workflows).toContain('orchestrate'); // From 'other' = all
    });
});
