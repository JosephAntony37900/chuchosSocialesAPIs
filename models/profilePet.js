module.exports = (sequelize,DataTypes) => {
    const ProfilePet = sequelize.define('ProfilePet', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
            allowNull: false
        },
        idOwner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'owners',
              key: 'id'
            },
            onUpdate: 'CASCADE'
        },
        

    }, {
     tableName: 'profilePets', 
     timestamps: false
   });
 
   return ProfilePet;
 }