@echo off
echo =====================================================
echo      GENERATING LIVE LINK FOR MAHI...
echo =====================================================
echo.
echo 1. Look for a URL below that looks like:
echo    https://some-random-name.loca.lt
echo.
echo 2. COPY that link.
echo.
echo 3. Send it to Mahi!
echo.
echo IMPORTANT: KEEP THIS WINDOW OPEN!
echo If you close it, the link stops working.
echo.
call npx localtunnel --port 5178
pause
