@echo off
echo ===========================================
echo       FIXING GIT AND PUSHING...
echo ===========================================

:: Force delete the corrupted .git file
attrib -r -s -h .git >nul 2>&1
del /f /q .git >nul 2>&1
rmdir /s /q .git >nul 2>&1

:: Run the commands you wanted
echo 1. Initializing Git...
call git init

echo 2. Adding README...
call git add README.md

echo 3. Committing...
call git commit -m "first commit"

echo 4. Renaming branch...
call git branch -M main

echo 5. Adding remote...
call git remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo 6. Pushing...
call git push -u origin main

echo.
echo ===========================================
echo DONE!
echo ===========================================
pause
