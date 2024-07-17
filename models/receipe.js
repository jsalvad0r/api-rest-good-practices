import { DataTypes } from "sequelize";

export const RecipeModel = (sequelize) => {
  const recipe = sequelize.define("Recipe", {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    ingredients: DataTypes.TEXT,
    instructions: DataTypes.TEXT,
    image: DataTypes.STRING
  });

  recipe.associate = function (models) {
    recipe.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    })
    recipe.belongsToMany(models.Tag, {
      through: 'Recipe_Tags'
    })
  }

  return recipe;
};
