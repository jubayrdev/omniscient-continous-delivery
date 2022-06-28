cd frontend
yarn build

cd ../backend
yarn build

cp -r ./prisma ../release
cd ../release
ls -lh
yarn
npx prisma migrate deploy
npx prisma generate
