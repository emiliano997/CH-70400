import mongoose, { isValidObjectId } from "mongoose";
import { validate as uuidValidate } from "uuid";

import { CONFIG } from "../config/config.js";
import { PERSISTENCE } from "../common/constants/persistence.js";

export function validate(dto) {
  return async (req, res, next) => {
    const { error } = dto.validate(req.body);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    next();
  };
}

export function validateId(req, res, next) {
  const { id } = req.params;

  switch (CONFIG.PERSISTENCE) {
    case PERSISTENCE.MONGODB: {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid id" });
      }
      break;
    }

    case PERSISTENCE.MEMORY: {
      if (!uuidValidate(id)) {
        return res.status(400).json({ error: "Invalid id" });
      }
      break;
    }
  }

  next();
}
