import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { AttributeInstance, AttributeCreationAttributes } from '../../interface';

class Attribute extends Model<AttributeInstance, AttributeCreationAttributes> implements AttributeInstance {
  id!: number;
  name!: string;
}

Attribute.init(
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
      type: DataTypes.ENUM('size', 'color'),
    },
  },
  {
    sequelize,
    modelName: 'Attribute',
  },
);

export default Attribute;
