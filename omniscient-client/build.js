const fse = require("fs-extra");

fse.copySync("./backend/prisma", "./release/prisma");
fse.copyFileSync("./backend/package.json", "./release/package.json");
