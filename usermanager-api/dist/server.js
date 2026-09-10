"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get("/inicio", (req, res) => {
    res.json({
        message: "Reto 30 días",
        "project": "Creación de una api de gestión de usuarios",
        "name": "usermanager-api",
        "durationDays": 30,
        "technologies": ["Node.js", "TypeScript", "Express"]
    });
});
/*app.get("/", (req, res) => {
  res.json({
    message: "UserManager API"
  });
});*/
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
