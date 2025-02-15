import { Business } from "../models/business.model.js";

class BusinessService {
  async getAll() {
    return Business.find();
  }

  async getById({ id }) {
    return Business.findById(id);
  }

  async create({ business }) {
    return Business.create(business);
  }

  async update({ id, business }) {
    return Business.findByIdAndUpdate;
  }
}

export const businessService = new BusinessService();
