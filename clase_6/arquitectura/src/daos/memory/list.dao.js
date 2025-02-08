import { v4 as uuid } from "uuid";

const list = [];

export class ListDao {
  async getAll() {
    return list;
  }

  async getById({ id }) {
    return list.find((l) => l.id === id);
  }

  async create({ list }) {
    const newList = {
      id: uuid(),
      ...list,
    };

    list.push(newList);

    return newList;
  }
}
