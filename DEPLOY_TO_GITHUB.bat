@echo off
echo ===========================================
echo       DEPLOYING TO GITHUB (FIXED MODE)...
echo ===========================================
echo.

IF EXIST ".git" (
    echo Cleaning up potential corrupted .git file...
    attrib -h -s .git 2>nul
    rmdir /s /q .git 2>nul
    del /f /q .git 2>nul
)

echo Initializing Git...
"C:\Program Files\Git\cmd\git.exe" init
"C:\Program Files\Git\cmd\git.exe" add .
"C:\Program Files\Git\cmd\git.exe" commit -m "Initial Deployment setup"
"C:\Program Files\Git\cmd\git.exe" branch -M main
"C:\Program Files\Git\cmd\git.exe" remote add origin https://github.com/Imsundaram/mahi-proposal.git

echo Pushing source code to main...
"C:\Program Files\Git\cmd\git.exe" push -u origin main --force

echo Installing dependencies (if needed)...
IF NOT EXIST "node_modules" call npm install

echo Deploying site to GitHub Pages...
call npm run deploy

echo.
echo ===========================================
echo DONE! Check your GitHub page now:
echo https://imsundaram.github.io/mahi-proposal/
echo ===========================================
pause
