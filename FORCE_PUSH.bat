@echo off
echo ===========================================
echo       FORCE FIX & PUSH SCRIPT
echo ===========================================
echo.

echo 1. Cleaning up old git configuration...
:: This removes the corrupted .git file/folder
attrib -r -s -h .git >nul 2>&1
del /f /q .git >nul 2>&1
rmdir /s /q .git >nul 2>&1

echo 2. Initializing new repository...
call git init

echo 3. Configuring temporary identity (to avoid "tell me who you are" errors)...
call git config user.email "you@example.com"
call git config user.name "Mahi User"

echo 4. Adding ALL files...
call git add .

echo 5. Committing...
call git commit -m "Initial commit for Mahi Proposal"

echo 6. Renaming branch to main...
call git branch -M main

echo 7. Adding remote origin...
call git remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo 8. Pushing to GitHub...
call git push -u origin main --force

echo.
echo ===========================================
echo IF YOU SEE "Everything up-to-date" or a Success message...
echo YOU ARE DONE!
echo ===========================================
pause
