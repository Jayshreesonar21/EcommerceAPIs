import { Optional } from 'sequelize';

export interface ProductInstance {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

export interface ProductTagInstance {
  id: number;
  productId: number;
  tagId: number;
}

export interface ProductCategoryInstance {
  id: number;
  productId: number;
  categoryId: number;
}

export interface ProductAttributeValueInstance {
  id: number;
  productId: number;
  attributeValueId: number;
}

export type ProductCreationAttributes = Optional<ProductInstance, 'id'>;
export type ProductTagCreationAttributes = Optional<ProductTagInstance, 'id'>;
export type ProductCategoryCreationAttributes = Optional<ProductCategoryInstance, 'id'>;
export type ProductAttributeValueCreationAttributes = Optional<ProductAttributeValueInstance, 'id'>;
