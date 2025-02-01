import { toyModel } from "../../models/toy.model.js";

export class ToyService {
  async getAll() {
    return toyModel.find();
  }

  /**
   *
   * @param { string } id
   */
  async getById({ id }) {
    return toyModel.findById(id);
  }

  async create({ toy }) {
    return toyModel.create(toy);
  }
}

// export default new ToyService();
// export const toyService = new ToyService();
