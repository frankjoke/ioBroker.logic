#!/bin/bash
echo "rsync *.js /c/iobroker/Test2/node_modules/iobroker.logic/"
rsync *.js /c/iobroker/Test2/node_modules/iobroker.logic/
rsync *.json /c/iobroker/Test2/node_modules/iobroker.logic/
rsync -r lib /c/iobroker/Test2/node_modules/iobroker.logic/
rsync -r admin /c/iobroker/Test2/node_modules/iobroker.logic/
cd /c/iobroker/Test2
pwd 
echo "iobroker upload logic"
node node_modules/iobroker.js-controller/iobroker.js upload logic
echo "nodejs/node.exe --inspect-brk ./node_modules/iobroker.logic/logic.js --debug"
node --inspect-brk ./node_modules/iobroker.logic/logic.js --debug
sleep 1