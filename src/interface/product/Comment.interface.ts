import { Optional } from 'sequelize';

export interface CommentInstance {
  id: number;
  content: string;
  rating: number;
  userId: number;
  productId: number;
}

export type CommentCreationAttributes = Optional<CommentInstance, 'id'>;
