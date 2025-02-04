'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Add the new column
    await queryInterface.addColumn('Students', 'adress', {
      type: Sequelize.STRING, // Specify the data type
      allowNull: true,         // You can change this based on your needs
    });
  },

  async down(queryInterface, Sequelize) {
    // Revert the column addition in case you want to rollback
    await queryInterface.removeColumn('Students', 'adress');
  }
};
