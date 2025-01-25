import { Router } from "./router.js";
import { POLICIES } from "../utils/policies.js";

class UserRouter extends Router {
  init() {
    this.get("/", [POLICIES.USER], this.getUsers);
    this.post("/", [POLICIES.ADMIN], this.validateBody, this.createUser);
  }

  getUsers(req, res) {
    res.success([
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
    ]);
  }

  validateBody(req, res, next) {
    const { name, age } = req.body;

    if (!name || !age) {
      return res.userError("Name and age are required");
    }

    next();
  }

  createUser(req, res) {
    const { name, age } = req.body;

    res.success({ name, age });
  }
}

// export default new UserRouter();
export const userRouter = new UserRouter().getRouter();
