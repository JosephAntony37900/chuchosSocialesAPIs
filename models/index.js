const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;


db.Comment = require('./comments')(sequelize, Sequelize);
db.Image = require('./images')(sequelize, Sequelize);
db.Message = require('./messages')(sequelize, Sequelize);
db.Owner = require('./owne')(sequelize, Sequelize);
db.Post = require('./posts')(sequelize, Sequelize);
db.ProfilePet = require('./profilePet')(sequelize, Sequelize);



module.exports = db;