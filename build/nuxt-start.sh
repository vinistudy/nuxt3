echo "pm2 starting"

rm -rf ./logs

pm2 start ecosystem.config.js

echo "pm2 started"