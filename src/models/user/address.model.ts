import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { AddressInstance, AddressCreationAttributes } from '../../interface';
import User from './user.model';

class Address extends Model<AddressInstance, AddressCreationAttributes> implements AddressInstance {
  id!: number;
  firstName!: string;
  lastName!: string;
  address!: string;
  city!: string;
  country!: string;
  zipCode!: string;
  userId!: number;
  isDeleted!: boolean;
}

Address.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    firstName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    lastName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    address: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    city: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    country: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    zipCode: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'Address',
  },
);

User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { onDelete: 'cascade', foreignKey: 'userId' });

export default Address;
