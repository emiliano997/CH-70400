import mongoose from "mongoose";

// Patrón Singleton
// Se crea una única instancia de la conexión a la base de datos
class MongoDBProvider {
  connection = null;
  static instance;

  constructor() {
    if (MongoDBProvider.instance) {
      return MongoDBProvider.instance;
    }

    MongoDBProvider.instance = this;
  }

  async connect(uri) {
    if (!this.connection) {
      try {
        this.connection = await mongoose.connect(uri);
      } catch (error) {
        console.error("Error connecting to MongoDB", error);
      }
    }

    return this.connection;
  }

  getInstance() {
    // return client
    return this.connection;
  }
}

export const mongodbProvider = new MongoDBProvider();
