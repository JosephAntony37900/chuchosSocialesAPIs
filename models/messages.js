module.exports = (sequelize,DataTypes) => {
    const Message = sequelize.define('Message', {
       id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       content: {
        type: DataTypes.STRING(500),
        allowNull: false
       },
       idPetSend: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'profilePets',
          key: 'id'
        },
        onUpdate: 'CASCADE'
       },
       idPetReceive: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'profilePets',
          key: 'id'
        },
        onUpdate: 'CASCADE'
       }
    }, {
     tableName: 'messages', 
     timestamps: false
   });
 
   return Message;
 }