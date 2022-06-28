"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
prisma.user.count().then(console.log);
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes"));
const app = (0, express_1.default)();
app.use(express_1.default.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.sendFile('index.html');
});
app.use('/api', routes_1.default);
app.listen(process.env.PORT, () => {
    console.log(`Backend listening on port ${process.env.PORT}`);
});
