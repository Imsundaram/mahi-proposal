@echo off
echo STARTING MAHI'S WEBSITE...
echo.
echo 1. Launching Website Server...
start "Mahi Website Server" cmd /k "npm run dev"
echo.
echo Waiting 5 seconds for server to start...
timeout /t 5
echo.
echo 2. Launching Public Link Tunnel...
start "Public Link Generator" cmd /k "npx localtunnel --port 5173"
echo.
echo 3. Opening Password Page...
start https://loca.lt/mytunnelpassword
echo.
echo ALL DONE!
echo - Check the 'Public Link Generator' window for the link.
echo - Use the password from the browser page.
pause
