import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { AttributeValueInstance, AttributeValueCreationAttributes } from '../../interface';
import Attribute from './attribute.model';

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

Attribute.hasMany(AttributeValue, { foreignKey: 'attributeId' });
AttributeValue.belongsTo(Attribute, { onDelete: 'cascade', foreignKey: 'attributeId' });

export default AttributeValue;
