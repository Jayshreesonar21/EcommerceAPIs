import { Optional } from 'sequelize';

export interface AttributeInstance {
  id: number;
  name: string;
}

export interface AttributeValueInstance {
  id: number;
  value: string;
  attributeId: number;
}

export type AttributeCreationAttributes = Optional<AttributeInstance, 'id'>;
export type AttributeValueCreationAttributes = Optional<AttributeValueInstance, 'id'>;
