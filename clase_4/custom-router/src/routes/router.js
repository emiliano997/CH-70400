import jwt from "jsonwebtoken";
import { Router as ExpressRouter } from "express";

import { SECRET } from "../utils/jwt.js";
import { POLICIES } from "../utils/policies.js";

export class Router {
  router;

  constructor() {
    this.router = ExpressRouter();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() {}

  /**
   *
   * @param { String } path
   * @param { String[] } policies
   * @param  { Function[] } callbacks
   */
  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomResponses,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  /**
   *
   * @param { String } path
   * @param { String[] } policies
   * @param  { Function[] } callbacks
   */
  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.generateCustomResponses,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  /**
   *
   * @param { String } path
   * @param { String[] } policies
   * @param  { Function[] } callbacks
   */
  put(path, policies, ...callbacks) {
    this.router.put(
      path,
      this.generateCustomResponses,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  /**
   *
   * @param { String } path
   * @param { String[] } policies
   * @param  { Function[] } callbacks
   */
  delete(path, policies, ...callbacks) {
    this.router.delete(
      path,
      this.generateCustomResponses,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      const [req, res] = params;
      try {
        await callback.apply(this, params);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });
  }

  generateCustomResponses(req, res, next) {
    res.success = (data) => res.json({ message: "Success", data });
    res.userError = (error) =>
      res.status(400).json({ error: "User error", details: error });
    res.serverError = (error) =>
      res.status(500).json({ error: "Server error", details: error });
    res.authError = (error) =>
      res.status(401).json({ error: "Auth error", details: error });
    res.forbidden = () => res.status(403).json({ error: "Forbidden" });

    next();
  }

  handlePolicies(policies) {
    return (req, res, next) => {
      if (policies.includes(POLICIES.PUBLIC)) return next();

      const authHeader = req.headers.authorization;

      if (!authHeader) return res.authError("Authorization header is required");

      const [_, token] = authHeader.split(" ");

      try {
        const decoded = jwt.verify(token, SECRET);

        if (!policies.includes(decoded.role)) return res.forbidden();

        req.user = decoded;
        next();
      } catch (error) {
        return res.authError("Invalid token");
      }
    };
  }
}
