import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

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
