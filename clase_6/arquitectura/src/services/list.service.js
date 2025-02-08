import { contactDao, listDao } from "../daos/index.dao.js";

class ListService {
  async getAll() {
    return await listDao.getAll();
  }

  async getById({ id }) {
    return await listDao.getById({ id });
  }

  async create({ list }) {
    const contacts = await Promise.all(
      list.contacts.map(async (c) => {
        const contact = await contactDao.getById({ id: c });

        if (!contact) {
          throw new Error("Contact not found");
        }
      })
    );

    return await listDao.create({ list });
  }
}

export const listService = new ListService();
