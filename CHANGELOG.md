# Changelog

All notable changes to this project will be documented in this file.

## [4.0.1] - 2026-02-02
### Added
- **Security**: New `malware-analyst` skill for threat intelligence and malicious URL scanning.
- **Security**: New `malware-protection.md` rule to prevent malware infiltration and link safety.
- **Feature**: Auto-update functionality via chat - AI can check NPM version and offer to upgrade.
- **Workflow**: New `/update` workflow for checking and updating Antigravity IDE.
- **Rule**: New `system-update.md` rule that triggers on version-related queries.
- **Tool**: `link_checker.py` script for automated URL security scanning.

### Changed
- Updated all documentation to reflect new security and update features.
- Enhanced `README.vi.md` with security and auto-update capabilities.
- Updated skill and workflow counts (27 Skills, 18 Workflows).

## [3.5.54] - 2026-01-31
- **Optimization**: Significantly reduced NPM package size (excluded `docs/`, `tests/`).
- **Automation**: Implemented GitHub Actions for auto-publishing with Provenance.
- **Fixes**: Sync `package-lock.json` and `.npmignore` for stable CI builds.
- **Docs**: Updated internal guides and verified asset counts.

## [3.5.30] - 2026-01-30
- **Feature**: Added "Copy-Paste Prompts" for AI Delegation in Setup Wizard.
- **Feature**: Smart Python detection and installation guidance.
- **Docs**: Renamed `GEMINI.md` to `GEMINI_GUIDE.md` for clarity.

## [3.5.29] - 2026-01-29
### Added
- **Workflow**: `/audit` for comprehensive quality checks.
- **Workflow**: `/onboard` for team integration.
- **Workflow**: `/document` for automated documentation generation.
- **Workflow**: `/monitor` for system health tracking.
- **Workflow**: `/security` and `/seo` for domain-specific tasks.

### Changed
- **CLI**: Enhanced `prompts.js` with dynamic workflow mapping based on industry.
- **Setup**: Improved "Engine Mode" selection (Standard vs Advanced) with language support.
