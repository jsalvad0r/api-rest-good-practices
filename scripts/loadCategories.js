import { loadModel } from "../db/loadModel.js";
import { faker } from "@faker-js/faker";

export async function loadCategories() {
  try {
    const sequelize = await loadModel();
    const { Category, Tag } = sequelize.models;

    const tags = [];
    for (let index = 0; index < 10; index++) {
      const tag = await Tag.create({ name: faker.string.alphanumeric() });
      tags.push(tag);
    }

    for (let index = 0; index < 10; index++) {
      const recipes = [];
      for (let index = 0; index < 20; index++) {
        recipes.push({
          title: faker.string.alphanumeric(),
          description: faker.lorem.paragraph(),
          ingredients: faker.lorem.paragraph(),
          instructions: "",
          image: faker.image.urlLoremFlickr(),
          tags: tags,
        });
      }

      Category.create({
        name: faker.lorem.slug(),
        recipes: recipes,
      });
    }
  } catch (e) {
    console.log("Error: ", e);
  }
}

await loadCategories();
