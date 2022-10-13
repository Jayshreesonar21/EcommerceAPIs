import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { ProductCategoryInstance, ProductCategoryCreationAttributes } from '../../interface';

class ProductCategory
  extends Model<ProductCategoryInstance, ProductCategoryCreationAttributes>
  implements ProductCategoryInstance
{
  id!: number;
  productId!: number;
  categoryId!: number;
}

ProductCategory.init(
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
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'products_categories',
  },
);

export default ProductCategory;
