module.exports = (sequelize,DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPet: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'profilePets',
              key: 'id'
            },
            onUpdate: 'CASCADE'
        },
        title: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(200),
            allowNull: false
        }
    }, {
     tableName: 'posts', 
     timestamps: false
   });
 
   return Post;
 }