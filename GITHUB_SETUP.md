# GitHub Repository Setup Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `womens-health-ai-assistant` (or your preferred name)
   - **Description**: "Full-stack Women's Health AI Assistant with React, Express, and Groq AI"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
cd C:\Users\woebe\College\rove

# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/womens-health-ai-assistant.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## Alternative: Using SSH (if you have SSH keys set up)

```bash
git remote add origin git@github.com:YOUR_USERNAME/womens-health-ai-assistant.git
git branch -M main
git push -u origin main
```

## Step 3: Verify

1. Go to your GitHub repository page
2. You should see all your files there
3. The README.md will automatically display on the repository homepage

## Troubleshooting

### If you get authentication errors:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token instead of password
- Or set up SSH keys

### If branch name is different:
```bash
git branch -M main
git push -u origin main
```

## Next Steps After Pushing

1. Add repository topics/tags on GitHub (e.g., `react`, `express`, `ai`, `womens-health`)
2. Add a repository description
3. Consider adding a license file
4. Create the Loom video using the script in `LOOM_VIDEO_SCRIPT.md`
5. Share your repository link!

