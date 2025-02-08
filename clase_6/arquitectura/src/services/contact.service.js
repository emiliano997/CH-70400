import { contactDao } from "../daos/index.dao.js";

class ContactService {
  async getAll() {
    return await contactDao.getAll();
  }

  async getById({ id }) {
    return await contactDao.getById({ id });
  }

  async create({ contact }) {
    return await contactDao.create({ contact });
  }

  async isValidId({ id }) {
    return await contactDao.isValidId({ id });
  }
}

export const contactService = new ContactService();
