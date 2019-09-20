module.exports = (sequelize, DataTypes) => {
    const Games = sequelize.define('games', {
        
        nameOfGame: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        gameGenre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        gamePrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        developer: { 
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Games;
}