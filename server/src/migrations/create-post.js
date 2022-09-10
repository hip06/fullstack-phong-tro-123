'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Posts', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            title: {
                type: Sequelize.STRING
            },
            star: {
                type: Sequelize.STRING,
                defaultValue: '0'
            },
            labelCode: {
                type: Sequelize.STRING
            },
            address: {
                type: Sequelize.STRING
            },
            attributesId: {
                type: Sequelize.STRING
            },
            categoryCode: {
                type: Sequelize.STRING
            },
            priceCode: {
                type: Sequelize.STRING
            },
            areaCode: {
                type: Sequelize.STRING
            },
            provinceCode: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            userId: {
                type: Sequelize.STRING
            },
            overviewId: {
                type: Sequelize.STRING
            },
            imagesId: {
                type: Sequelize.STRING
            },
            priceNumber: {
                type: Sequelize.FLOAT
            },
            areaNumber: {
                type: Sequelize.FLOAT
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Posts');
    }
};