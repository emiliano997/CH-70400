import { userService } from "../services/user.service.js";
import { orderService } from "../services/order.service.js";
import { businessService } from "../services/business.service.js";

class OrderController {
  async getAll(req, res) {
    try {
      const orders = await orderService.getAll();
      res.status(200).json({ orders });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const order = await orderService.getById({ id });

      if (!order) {
        return res.status(404).json({
          error: "Order not found",
        });
      }

      res.status(200).json({ order });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async create(req, res) {
    try {
      const {
        user: userId,
        business: businessId,
        products: productsIds,
      } = req.body;

      const user = await userService.getById({ id: userId });

      if (!user) return res.status(404).json({ error: "User not found" });

      const business = await businessService.getById({ id: businessId });

      if (!business)
        return res.status(404).json({ error: "Business not found" });

      const products = business.products.filter((product) => {
        return productsIds.includes(product._id.toString());
      });

      if (products.length !== productsIds.length) {
        return res.status(400).json({ error: "Invalid products ids" });
      }

      const totalPrice = products.reduce((acc, product) => {
        return acc + product.price;
      }, 0);

      const orderNumber = await orderService.getOrderNumber();

      console.log(orderNumber);

      const order = await orderService.create({
        order: {
          number: orderNumber,
          business: businessId,
          user: userId,
          products,
          totalPrice,
        },
      });

      res.status(201).json({ order });
    } catch (error) {
      console.log(error);

      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }

  async resolve(req, res) {
    try {
      const { id } = req.params;
      const { resolve } = req.body;

      const order = await orderService.getById({ id });

      if (!order) {
        return res.status(404).json({
          error: "Order not found",
        });
      }

      if (order.status !== "pending") {
        return res.status(400).json({
          error: "Order already resolved",
        });
      }

      if (resolve !== "cancelled" && resolve !== "completed") {
        return res.status(400).json({
          error: "Invalid resolve value",
        });
      }

      order.status = resolve;

      const updatedOrder = await orderService.update({ id, order });

      res.status(200).json({ order: updatedOrder });
    } catch (error) {
      res.status(500).json({
        error: "Internal server error",
        details: error,
      });
    }
  }
}

export const orderController = new OrderController();
