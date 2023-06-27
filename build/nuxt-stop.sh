echo 'begin stop'

pm2 stop xiangrongNuxt

pm2 delete xiangrongNuxt

rm -rf ./logs

echo 'stoped'