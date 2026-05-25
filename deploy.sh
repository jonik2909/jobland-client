git reset --hard

git checkout master
git pull origin master


npm install pm2@latest -g

yarn

yarn run build

pm2 start "yarn run start:prod" --name "JOBLAND-CLIENT"