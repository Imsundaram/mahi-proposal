@echo off
echo Fixing git configuration...
:: This removes the corrupted .git file that is causing the error
attrib -r -s -h .git >nul 2>&1
del /f /q .git >nul 2>&1
rmdir /s /q .git >nul 2>&1

echo Running your requested commands:
echo.

echo 1. Creating README...
echo "# mahi-proposal" >> README.md

echo 2. Git Init...
git init

echo 3. Git Add...
git add README.md

echo 4. Git Commit...
git commit -m "first commit"

echo 5. Branch Rename...
git branch -M main

echo 6. Remote Add...
git remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo 7. Push...
git push -u origin main

echo.
echo Done.
pause
