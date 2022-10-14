import { Optional } from 'sequelize';

export interface ProductImageInstance {
  id: number;
  productId: number;
  fileName: string;
  filePath: string;
  originalName: string;
  fileSize: number;
}

export type ProductImageCreationAttributes = Optional<ProductImageInstance, 'id'>;
