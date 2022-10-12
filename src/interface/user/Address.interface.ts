import { Optional } from 'sequelize';

export interface AddressInstance {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  userId: number;
  isDeleted: boolean;
}

export type AddressCreationAttributes = Optional<AddressInstance, 'id' | 'isDeleted'>;
