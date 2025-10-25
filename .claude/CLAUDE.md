# Git Best Practices for Claude

## Overview
Claude is responsible for all git operations in this repository. The developer will request changes, and Claude will handle commits, pushes, and branch management.

## Pre-Commit Rules

### ALWAYS run build before committing
- **MANDATORY**: Execute `npm run build` before every commit
- Ensure the code compiles successfully
- If build fails, fix errors before committing
- Never commit broken or non-compiling code

### Review changes thoroughly
- Use `git status` to see all changes
- Use `git diff` to review specific modifications
- Verify that only intended files are being committed
- Check for any accidental inclusions

### Security checks
- **NEVER** commit `.env` files
- **NEVER** commit API keys, tokens, or credentials
- **NEVER** commit sensitive configuration files
- Review all changes to catch accidental secret inclusions
- Verify `.gitignore` is properly configured

### Verify .gitignore
- Ensure `.gitignore` includes common patterns:
  - `.env` and `.env.*`
  - `node_modules/`
  - Build artifacts
  - IDE-specific files
  - API keys and credential files

## Commit Message Format

### Use Conventional Commits
Format: `<type>: <description>`

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, no logic change)
- `refactor`: Code refactoring (no feature change or bug fix)
- `test`: Adding or updating tests
- `chore`: Maintenance tasks (dependencies, config, etc.)

### Writing Guidelines
- **Use imperative mood**: "add feature" not "added feature"
- **Keep first line under 50 characters**
- **Explain WHAT and WHY, not HOW**
- **One logical change per commit**
- Be concise but descriptive

### Examples
```
feat: add user authentication system
fix: resolve memory leak in data processor
docs: update API documentation for v2
refactor: simplify error handling logic
test: add unit tests for payment module
chore: update dependencies to latest versions
```

## Workflow

### Branch Strategy
- **Work directly on main branch** (solo development)
- No feature branches required for this project
- Keep commit history clean and linear

### Git Operations
- **Claude handles ALL git commands**
- Developer should NEVER need to run git commands manually
- Claude will:
  - Stage appropriate files
  - Create well-formatted commit messages
  - Build and verify before committing
  - Push changes when appropriate

### Commit Process
1. Run `npm run build` to verify code compiles
2. Run `git status` to see changes
3. Run `git diff` to review modifications
4. Stage relevant files with `git add`
5. Create commit with proper conventional commit message
6. Run `git status` to verify commit success
7. Push to remote if requested

## Security Practices

### Files to NEVER Commit
- `.env` and `.env.*` (environment variables)
- `credentials.json` or similar credential files
- API keys, tokens, passwords
- Private keys or certificates
- Database connection strings with passwords

### Before Every Commit
- Scan staged files for sensitive data
- Verify `.env` files are not included
- Check for hardcoded secrets in code
- Warn developer if suspicious files are staged

### If Secrets Are Detected
- **STOP** the commit process immediately
- Warn the developer about the security issue
- Do not proceed until developer confirms it's safe
- Consider if `.gitignore` needs updating

## Remember

- **Build first, commit second** - always verify compilation
- **One logical change per commit** - keep commits focused
- **Conventional commits** - maintain consistent message format
- **Security is paramount** - never compromise on secret protection
- **Claude is in charge** - developer focuses on code, Claude handles git

## Special Notes

- If a commit fails due to build errors, fix the errors before retrying
- If pre-commit hooks modify files, verify and amend the commit if safe
- Never force push without explicit developer request
- Always provide feedback on what git operations were performed
