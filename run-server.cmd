@echo off
if not %1 == "" pushd "%~1"
rem pause 
where python.exe
if not %ERRORLEVEL% == 0 set PATH=c:\python34;%PATH%

echo .
echo .
echo --- STRG-C zum beenden des Servers 
echo .
echo .

python  -m http.server 80

pause
if not "%1" == "" popd %1
