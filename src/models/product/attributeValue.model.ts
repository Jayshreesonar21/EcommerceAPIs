import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { AttributeValueInstance, AttributeValueCreationAttributes } from '../../interface';
import Attribute from './attribute.model';
import Product from './product.model';
import ProductAttributeValue from './product_attribute.model';

class AttributeValue
  extends Model<AttributeValueInstance, AttributeValueCreationAttributes>
  implements AttributeValueInstance
{
  id!: number;
  value!: string;
  attributeId!: number;
}

AttributeValue.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    value: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    attributeId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'AttributeValue',
  },
);

// Association between attribute and attribute-value
Attribute.hasMany(AttributeValue, { foreignKey: 'attributeId' });
AttributeValue.belongsTo(Attribute, { onDelete: 'cascade', foreignKey: 'attributeId' });

// Association between attribute-value and product
AttributeValue.belongsToMany(Product, {
  through: ProductAttributeValue,
  foreignKey: 'attributeValueId',
  otherKey: 'productId',
});
Product.belongsToMany(AttributeValue, {
  through: ProductAttributeValue,
  foreignKey: 'productId',
  otherKey: 'attributeValueId',
});

export default AttributeValue;
