import { User } from "../models/user.model.js";

class UserService {
  async getAll() {
    return User.find();
  }

  /**
   *
   * @param { string } id
   * @returns { Promise<User> }
   */
  async getById({ id }) {
    return User.findById(id);
  }

  async create({ user }) {
    return User.create(user);
  }

  async update({ id, user }) {
    return User.findByIdAndUpdate(id, user, { new: true });
  }
}

export const userService = new UserService();
