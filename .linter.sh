#!/bin/bash
cd /home/kavia/workspace/code-generation/golfmaster-pro-19762-af1af4bd/golfmaster_pro_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

