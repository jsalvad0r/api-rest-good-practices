import { DataTypes } from "sequelize";

export const CategoryModel = (sequelize) => {
  const category = sequelize.define("Category", {
    name: DataTypes.STRING,
  });

  category.associate = function (models) {
    category.hasMany(models.Recipe, {
      foreignKey: 'categoryId'
    })
  }

  return category;
};
