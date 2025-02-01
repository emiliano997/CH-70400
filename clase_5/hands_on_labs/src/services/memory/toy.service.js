import { v4 as uuid } from "uuid";

export class ToyService {
  constructor() {
    this.toys = [];
  }

  async getAll() {
    return this.toys;
  }

  async getById({ id }) {
    return this.toys.find((toy) => toy.id === id);
  }

  async create({ toy }) {
    toy.id = uuid();

    this.toys.push(toy);
    return toy;
  }
}
