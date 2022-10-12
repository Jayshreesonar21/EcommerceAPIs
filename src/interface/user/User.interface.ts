import { Optional } from 'sequelize';

export interface UserInstance {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  isDeleted: boolean;
}

export type UserCreationAttributes = Optional<UserInstance, 'id' | 'role' | 'isDeleted'>;
