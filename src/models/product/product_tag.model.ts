import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { ProductTagInstance, ProductTagCreationAttributes } from '../../interface';

class ProductTag extends Model<ProductTagInstance, ProductTagCreationAttributes> implements ProductTagInstance {
  id!: number;
  productId!: number;
  tagId!: number;
}

ProductTag.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    tagId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'products_tags',
  },
);

export default ProductTag;
