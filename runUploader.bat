@ECHO OFF

:startscript
echo.
echo.
ECHO Hello, this file will upload all images in the uploadHelper folder into IMGUR, it will then delete these images.
ECHO Close this now if you don't wish to do that!
PAUSE
python ./uploadHelper/uploader.py
echo.
ECHO Do you wish to update the master branch?
ECHO 1. Yes
ECHO 2. No
echo.
echo.
SET /P ACTION="Choose an option: "

2>NUL CALL :CASE_%ACTION%
IF ERRORLEVEL 1 CALL :DEFAULT_CASE

ECHO Done.
EXIT /B

:CASE_1
  git checkout master
  git add .
  git commit -m "New images added"
  git push
  ECHO Task is done!
  PAUSE
  GOTO END_CASE
:CASE_2 
  GOTO END_CASE
:DEFAULT_CASE
  ECHO Try again, unknown option: "%ACTION%"
  GOTO startscript
:END_CASE
  VER > NUL
  GOTO :EOF