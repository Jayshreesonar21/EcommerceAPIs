import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { ProductInstance, ProductCreationAttributes } from '../../interface';

class Product extends Model<ProductInstance, ProductCreationAttributes> implements ProductInstance {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  stock!: number;
}

Product.init(
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
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(20, 2),
    },
    stock: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Product',
  },
);

export default Product;
