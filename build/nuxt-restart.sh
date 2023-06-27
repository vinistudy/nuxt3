echo 'begin restart'

rm -rf ./logs

pm2 restart xiangrongNuxt

echo 'restarted'