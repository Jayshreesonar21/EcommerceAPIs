import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { UserInstance, UserCreationAttributes } from '../../interface';

class User extends Model<UserInstance, UserCreationAttributes> implements UserInstance {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  role!: string;
  isDeleted!: boolean;
}

User.init(
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
    email: {
      allowNull: false,
      type: DataTypes.STRING(250),
      validate: {
        isEmail: true,
      },
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'),
      defaultValue: 'user',
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
    indexes: [
      {
        unique: true,
        fields: ['email'],
      },
    ],
  },
);

export default User;
