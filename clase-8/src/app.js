import express from "express";
import router from "./routes/index.js";
const app = express();

// Middlewares
app.use(express.json()); // Nos permite leer archivos JSON
app.use(express.urlencoded({ extended: true }));

//Habilitar archivos estáticos
app.use("/static", express.static("public"));

// Middleware a nivel de aplicación
app.use((req, res, next) => {
  console.log("Se ejecuta el middleware a nivel aplicación");

  next(); // Indica que continue con el siguiente middleware
})

app.use("/api", router);

app.listen(8080, () => {
  console.log("Server on port 8080");
});
