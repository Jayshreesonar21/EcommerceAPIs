import { DataTypes, Model } from 'sequelize';
import { sequelize } from '..';

import { TagInstance, TagCreationAttributes } from '../../interface';
import Product from './product.model';
import ProductTag from './product_tag.model';

class Tag extends Model<TagInstance, TagCreationAttributes> implements TagInstance {
  id!: number;
  name!: string;
  slug!: string;
  description!: string;
}

Tag.init(
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
      type: DataTypes.TEXT,
    },
    slug: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    modelName: 'Tag',
  },
);

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tagId',
  otherKey: 'productId',
});

Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'productId',
  otherKey: 'tagId',
});

export default Tag;
