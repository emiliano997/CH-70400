import { userModel } from "../../models/user.model.js";

export class UserService {
  async getAll() {
    return userModel.find();
  }

  /**
   *
   * @param { string } id
   */
  async getById({ id }) {
    return userModel.findById(id).populate("toys");
  }

  async create({ user }) {
    return userModel.create(user);
  }
}

// export const userService = new UserService();
