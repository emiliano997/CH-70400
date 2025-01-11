export function auth(req, res, next) {
  if (req.session?.user && req.session?.admin) {
    next();
    return;
  }

  return res.status(401).json({ error: "No autorizado" });
}
