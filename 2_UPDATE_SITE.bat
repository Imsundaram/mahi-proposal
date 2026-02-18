@echo off
echo ===================================
echo     UPDATING YOUR LIVE WEBSITE
echo ===================================
echo.
echo Pushing changes to GitHub...
echo.
git add .
git commit -m "Added photos for Mahi"
git push
echo.
echo ALL DONE! Your site will be updated in 1 minute.
echo.
pause
