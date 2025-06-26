@echo off

set logpath=%cd%\GTRequiredSoftwareVersions.log

set TIMESTAMP=%DATE%_%TIME:~0,2%-%TIME:~3,2%-%TIME:~6,2%
echo "GT Required Software versions. This info is collected on : " %TIMESTAMP% > %logpath% 2>&1
echo "Operating System:"  >> %logpath% 2>&1 && systeminfo | find "OS Name" >> %logpath% 2>&1

echo "JDK version:" >> %logpath% 2>&1 && java -version >> %logpath% 2>&1

:: Check if Python is installed
where python >nul 2>nul
IF %ERRORLEVEL% EQU 0 (
    echo "Python version:"  >> %logpath% 2>&1 && python --version >> %logpath% 2>&1
) ELSE (
    echo "Python3 version:"  >> %logpath% 2>&1 && python3 --version >> %logpath% 2>&1
)

echo "Microsoft Visual Studio build tools:" >> %logpath%
setlocal
cd \
dir /s /b /ad | findstr [0-9]*\\BuildTools\\Licenses >> %logpath%
echo "End of Visual Studio part" >> %logpath%

echo "Node.js version:" >> %logpath% 2>&1 && node -v >> %logpath% 2>&1

echo "NPM version:"  >> %logpath% 2>&1 && npm -v >> %logpath% 2>&1