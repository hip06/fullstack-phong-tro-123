'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Attributes', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            price: {
                type: Sequelize.STRING
            },
            acreage: {
                type: Sequelize.STRING
            },
            published: {
                type: Sequelize.STRING
            },
            hashtag: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('Attributes');
    }
};