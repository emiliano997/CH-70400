import { v4 as uuid } from "uuid";

const contacts = [];

export class ContactDao {
  async getAll() {
    return contacts;
  }

  async getById({ id }) {
    return contacts.find((contact) => contact.id === id);
  }

  async create({ contact }) {
    const newContact = {
      id: uuid(),
      ...contact,
    };

    contacts.push(newContact);

    return newContact;
  }
}
