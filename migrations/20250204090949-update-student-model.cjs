module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('Students', 'name');
    // await queryInterface.removeColumn('Students', 'email');
    // await queryInterface.removeColumn('Students', 'password');
    // await queryInterface.removeColumn('Students', 'age');

    await queryInterface.addColumn('Students', 'user_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Students', 'name', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Students', 'email', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Students', 'password', {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn('Students', 'age', {
      type: Sequelize.INTEGER,
    });

    await queryInterface.removeColumn('Students', 'userId');
  },
};
