import Sequelize from "sequelize";
import { CategoryModel } from "../models/category.js";
import { RecipeModel } from "../models/receipe.js";
import { TagModel } from "../models/tag.js";
import config from '../config/config.json' assert { type: 'json'}

export async function loadModel() {
  const sequelize = new Sequelize({...config["development"]});
  const db = {};

  db["Category"] = CategoryModel(sequelize);
  db["Recipe"] = RecipeModel(sequelize);
  db["Tag"] = TagModel(sequelize);

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return sequelize;
}
