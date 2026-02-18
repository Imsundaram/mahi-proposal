@echo off
echo ===========================================
echo       RUNNING YOUR GIT COMMANDS...
echo ===========================================
echo.

:: 1. Fix .git issue (if any)
IF EXIST ".git" (
    echo Cleaning up old/corrupted .git configuration...
    attrib -h -s .git 2>nul
    del /f /q .git 2>nul
    rmdir /s /q .git 2>nul
)

:: 2. Run the requested commands
call echo "# mahi-proposal" >> README.md

echo Initializing Git...
call git init

echo Adding README...
call git add README.md

echo Committing...
call git commit -m "first commit"

echo Branching...
call git branch -M main

echo Adding Remote...
call git remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo Pushing...
call git push -u origin main

echo.
echo ===========================================
echo DONE!
echo Note: This only pushed README.md.
echo To push the rest of your website, run DEPLOY_TO_GITHUB.bat
echo ===========================================
pause
