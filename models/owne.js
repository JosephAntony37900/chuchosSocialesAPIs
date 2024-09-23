module.exports = (sequelize,DataTypes) => {
    const Owner = sequelize.define('Owner', {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       email: {
        type: DataTypes.STRING(60),
        allowNull: false
       },
       password: {
        type: DataTypes.INTEGER,
        allowNull: false
       }

    }, {
     tableName: 'owners', 
     timestamps: false
   });
 
   return Owner;
 }