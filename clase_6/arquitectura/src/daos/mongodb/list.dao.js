import { List } from "../../models/list.model.js";

export class ListDao {
  async getAll() {
    return await List.find().populate("contacts");
  }

  async getById({ id }) {
    return await List.findById(id).populate("contacts");
  }

  async create({ list }) {
    return await List.create(list);
  }
}
