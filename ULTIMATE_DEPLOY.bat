@echo off
echo ===========================================
echo       DEPLOYING TO YOUR GITHUB REPO
echo       (ULTIMATE FIXER)
echo ===========================================
echo.

echo 1. Stopping any stuck git processes...
taskkill /F /IM git.exe /T >nul 2>&1

echo 2. Removing corrupted .git file/folder...
attrib -r -s -h .git >nul 2>&1
rem Try deleting as a file first
del /f /q .git >nul 2>&1
rem Then as a folder
rmdir /s /q .git >nul 2>&1

if exist .git (
    echo ERROR: Could not remove .git folder.
    echo Please close VS Code and try running this script again.
    pause
    exit /b
)

echo 3. Initializing new Git repository...
call git init
if errorlevel 1 (
    echo Git init failed.
    pause
    exit /b
)

echo 4. Adding remote: https://github.com/Imsundaram/mahi-proposal.git
call git remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo 5. Committing files...
call git add .
call git commit -m "Deployment fix commit"

echo 6. Pushing to main branch...
call git branch -M main
call git push -u origin main --force

echo 7. Deploying to GitHub Pages...
call npm run deploy

echo.
echo ===========================================
echo DONE! check the URL:
echo https://imsundaram.github.io/mahi-proposal/
echo ===========================================
pause
