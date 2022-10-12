'use strict';
import * as path from 'path';
import { Sequelize } from 'sequelize';
import environmentConfig from '../constants/environment.constant';
const env = environmentConfig.NODE_ENV;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require(path.join(__dirname + '../../../' + 'config/config.json'))[env];

const sequelize = new Sequelize(config);

export { Sequelize, sequelize };
