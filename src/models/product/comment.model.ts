import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { CommentInstance, CommentCreationAttributes } from '../../interface';
import User from '../user/user.model';
import Product from './product.model';

class Comment extends Model<CommentInstance, CommentCreationAttributes> implements CommentInstance {
  id!: number;
  content!: string;
  rating!: number;
  userId!: number;
  productId!: number;
}

Comment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      unique: true,
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    sequelize,
    modelName: 'Comment',
  },
);

Product.hasMany(Comment, { foreignKey: 'productId' });
Comment.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

export default Comment;
