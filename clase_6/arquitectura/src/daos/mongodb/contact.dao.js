import { Contact } from "../../models/contact.model.js";

export class ContactDao {
  async getAll() {
    return await Contact.find();
  }

  async getById({ id }) {
    return await Contact.findById(id);
  }

  async create({ contact }) {
    return await Contact.create(contact);
  }
}
