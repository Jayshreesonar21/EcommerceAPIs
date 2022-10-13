import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { ProductAttributeValueInstance, ProductAttributeValueCreationAttributes } from '../../interface';

class ProductAttributeValue
  extends Model<ProductAttributeValueInstance, ProductAttributeValueCreationAttributes>
  implements ProductAttributeValueInstance
{
  id!: number;
  productId!: number;
  attributeValueId!: number;
}

ProductAttributeValue.init(
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
    attributeValueId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'products_attributes',
  },
);

export default ProductAttributeValue;
