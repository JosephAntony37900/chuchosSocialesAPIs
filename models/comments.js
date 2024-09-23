module.exports = (sequelize,DataTypes) => {
   const Comment = sequelize.define('Comment', {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
       },
       id_Post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE'
       },
       id_Pet: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'profilePets',
          key: 'id'
        },
        onUpdate: 'CASCADE'
       },
       content: {
         type: DataTypes.STRING(120),
         allowNull: false
       }   
   }, {
    tableName: 'comments', 
    timestamps: false
  });

  return Comment;
}