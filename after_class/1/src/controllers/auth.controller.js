import { generateToken } from "../utils/jwt.js";

export class AuthController {
  static async login(req, res) {
    console.log(req.user);

    const payload = {
      email: req.user.email,
      role: req.user.role,
    };

    const token = generateToken(payload);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 2,
    });
  }

  static async register(req, res) {
    res.json(req.user);
  }

  static async current(req, res) {
    res.json(req.user);
  }
}
