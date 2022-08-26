'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Attribute extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Attribute.hasOne(models.Post, { foreignKey: 'attributesId', as: 'attributes' })
        }
    }
    Attribute.init({
        price: DataTypes.STRING,
        acreage: DataTypes.STRING,
        published: DataTypes.STRING,
        hashtag: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Attribute',
    });
    return Attribute;
};