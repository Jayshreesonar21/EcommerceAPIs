import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { ProductImageInstance, ProductImageCreationAttributes } from '../../interface';
import Product from './product.model';

class ProductImage extends Model<ProductImageInstance, ProductImageCreationAttributes> implements ProductImageInstance {
  id!: number;
  productId!: number;
  fileName!: string;
  filePath!: string;
  originalName!: string;
  fileSize!: number;
}

ProductImage.init(
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
    fileName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    filePath: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    originalName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    fileSize: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'ProductImage',
  },
);

Product.hasMany(ProductImage, { foreignKey: 'productId' });
ProductImage.belongsTo(Product, { onDelete: 'cascade', foreignKey: 'productId' });

export default ProductImage;
