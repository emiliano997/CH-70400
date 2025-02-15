import { Order } from "../models/order.model.js";

class OrderService {
  async getAll() {
    return Order.find();
  }

  async getById({ id }) {
    return Order.findById(id);
  }

  async create({ order }) {
    return Order.create(order);
  }

  async update({ id, order }) {
    return Order.findByIdAndUpdate(id, order, { new: true });
  }

  async getOrderNumber() {
    return Number(Date.now() + Math.floor(Math.random() * 10000 + 1));
  }
}

export const orderService = new OrderService();
