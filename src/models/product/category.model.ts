import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { CategoryInstance, CategoryCreationAttributes } from '../../interface';

class Category extends Model<CategoryInstance, CategoryCreationAttributes> implements CategoryInstance {
  id!: number;
  name!: string;
  description!: string;
}

Category.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Category',
    hooks: {
      beforeCreate: (category, options) => {
        category.name = category.name.toLowerCase();
      },
    },
  },
);

export default Category;
