import {
  UserService as UserServiceMongo,
  ToyService as ToyServiceMongo,
} from "./mongodb/index.js";

import {
  UserService as UserServiceMemory,
  ToyService as ToyServiceMemory,
} from "./memory/index.js";

import { CONFIG } from "../config/config.js";
import { PERSISTANCE } from "../utils/persistance.js";

function getService(persistance) {
  switch (persistance) {
    case PERSISTANCE.MONGO_DB:
      return {
        userService: new UserServiceMongo(),
        toyService: new ToyServiceMongo(),
      };

    case PERSISTANCE.MEMORY:
      return {
        userService: new UserServiceMemory(),
        toyService: new ToyServiceMemory(),
      };

    default:
      return {
        userService: new UserServiceMemory(),
        toyService: new ToyServiceMemory(),
      };
  }
}

export const { userService, toyService } = getService(CONFIG.PERSISTANCE);
