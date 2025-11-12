# Quick Push to GitHub

## After creating your GitHub repository, run these commands:

```powershell
# Navigate to project directory
cd C:\Users\woebe\College\rove

# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/womens-health-ai-assistant.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## If you need to update the remote URL:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/womens-health-ai-assistant.git
```

## Check your remote:

```powershell
git remote -v
```

---

**Note**: You'll need to authenticate with GitHub. Use:
- Personal Access Token (recommended)
- GitHub CLI (`gh auth login`)
- SSH keys

