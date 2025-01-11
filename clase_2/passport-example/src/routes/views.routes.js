import { Router } from "express";

export const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
  const isSession = req.session.user ? true : false;
  res.render("index", { title: "Inicio", isSession });
});

viewsRouter.get("/login", (req, res) => {
  const isSession = req.session.user ? true : false;

  if (isSession) return res.redirect("/profile");

  res.render("login", { title: "Iniciar sesión" });
});

viewsRouter.get("/register", (req, res) => {
  const isSession = req.session.user ? true : false;

  const { message } = req.query;

  let messageRes;

  if (message) {
    switch (message) {
      case "fail-register":
        messageRes = "Falló el registro";
        break;

      default:
        messageRes = "";
    }
  }

  if (isSession) return res.redirect("/profile");

  res.render("register", { title: "Registro", message: messageRes });
});

viewsRouter.get("/profile", (req, res) => {
  const isSession = req.session.user ? true : false;

  if (!isSession) return res.redirect("/login");

  res.render("profile", { title: "Perfil", user: req.session.user });
});

viewsRouter.get("/restore-password", (req, res) => {
  const isSession = req.session.user ? true : false;

  if (isSession) return res.redirect("/profile");

  res.render("restore-password", { title: "Restablecer contraseña" });
});
