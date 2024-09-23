module.exports = (sequelize,DataTypes) => {
    const Image = sequelize.define('Image', {
       id: {
        type: DataTypes.INTEGER,
        primaryKey: DataTypes.INTEGER,
        autoIncrement: true
       },
       name: {
        type: DataTypes.STRING(60),
        allowNull: false
       },
       url: {
        type: DataTypes.STRING(200),
        allowNull: false
       },
       idPost: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id'
        },
        onUpdate: 'CASCADE'
       }
    }, {
     tableName: 'images', 
     timestamps: false
   });
 
   return Image;
 }