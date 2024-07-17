import { DataTypes } from "sequelize";

export const TagModel = (sequelize) => {
  const tag = sequelize.define("Tag", {
    name: DataTypes.STRING,
  });

  return tag;
};
