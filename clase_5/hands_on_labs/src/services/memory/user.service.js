import { v4 as uuid } from "uuid";

export class UserService {
  users;

  constructor() {
    this.users = [];
  }

  async getAll() {
    return this.users;
  }

  async getById({ id }) {
    return this.users.find((user) => user.id === id);
  }

  async create({ user }) {
    user.id = uuid();
    this.users.push(user);
    return user;
  }
}
