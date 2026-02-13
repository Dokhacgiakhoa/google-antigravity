const { checkAndApplyUpdates } = require('../../cli/lib/auto-update');

// Mocks
const mockUpdateNotifier = jest.fn();
const mockPrompts = jest.fn();
const mockExecSync = jest.fn();
const mockExit = jest.fn();

const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

describe('checkAndApplyUpdates', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should do nothing if no update is available', async () => {
    // Setup updateNotifier to return no update
    mockUpdateNotifier.mockReturnValue({ update: null });

    await checkAndApplyUpdates({}, {
      updateNotifier: mockUpdateNotifier,
      prompts: mockPrompts,
      execSync: mockExecSync,
      exit: mockExit
    });

    expect(mockUpdateNotifier).toHaveBeenCalled();
    expect(mockPrompts).not.toHaveBeenCalled();
    expect(mockExecSync).not.toHaveBeenCalled();
  });

  test('should install WITHOUT prompt if update is available (AGGRESSIVE MODE)', async () => {
    // Setup updateNotifier to return an update
    mockUpdateNotifier.mockReturnValue({
      update: { latest: '3.6.0', current: '3.5.0', type: 'minor' }
    });

    await checkAndApplyUpdates({}, {
      updateNotifier: mockUpdateNotifier,
      prompts: mockPrompts,
      execSync: mockExecSync,
      exit: mockExit
    });

    // Should NOT prompt
    expect(mockPrompts).not.toHaveBeenCalled();
    // Should install immediately
    expect(mockExecSync).toHaveBeenCalledWith('npm install -g antigravity-ide@latest', expect.anything());
    expect(mockExit).toHaveBeenCalledWith(0);
  });
});
