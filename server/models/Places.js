module.exports = (sequelize, DataTypes) => {
    const Places = sequelize.define("Places", {
        title :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        descrtiption: {
            type:DataTypes.STRING(5000),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        image :{
            type: DataTypes.STRING(1000)
        }

    })

    return Places
}