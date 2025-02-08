import {
  ContactDao as ContactDaoMongo,
  ListDao as ListDaoMongo,
} from "./mongodb/index.js";

import {
  ContactDao as ContactDaoMemory,
  ListDao as ListDaoMemory,
} from "./memory/index.js";

import { CONFIG } from "../config/config.js";
import { PERSISTENCE } from "../common/constants/persistence.js";

// Patrón Factory
// Se crea una instancia de los DAOs según el tipo de persistencia
function getDaos({ persistence }) {
  switch (persistence) {
    case PERSISTENCE.MONGODB:
      return {
        contactDao: new ContactDaoMongo(),
        listDao: new ListDaoMongo(),
      };

    case PERSISTENCE.MEMORY:
      return {
        contactDao: new ContactDaoMemory(),
        listDao: new ListDaoMemory(),
      };

    default:
      return {
        contactDao: new ContactDaoMemory(),
        listDao: new ListDaoMemory(),
      };
  }
}

export const { contactDao, listDao } = getDaos({
  persistence: CONFIG.PERSISTENCE,
});
