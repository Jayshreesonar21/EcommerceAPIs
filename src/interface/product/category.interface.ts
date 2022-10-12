import { Optional } from 'sequelize';

export interface CategoryInstance {
  id: number;
  name: string;
  description: string;
}

export type CategoryCreationAttributes = Optional<CategoryInstance, 'id'>;
