import { Optional } from 'sequelize';

export interface TagInstance {
  id: number;
  name: string;
  slug: string;
  description: string;
}

export type TagCreationAttributes = Optional<TagInstance, 'id'>;
