'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING(200),
        unique: true,
        allowNull: false
      },
      senha: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users')
  }
};