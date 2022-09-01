'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Price extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            //   Price.hasMany(models.Post, { foreignKey: 'userId', as: 'user' })
        }
    }
    Price.init({
        code: DataTypes.STRING,
        order: DataTypes.INTEGER,
        value: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Price',
    });
    return Price;
};