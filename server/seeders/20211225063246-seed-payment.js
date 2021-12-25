"use strict";

const data = require("../seed.json");
module.exports = {
  up: (queryInterface, Sequelize) => {
    data.forEach((e) => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });
    return queryInterface.bulkInsert("Payments", data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete("Payments", null, {});
  },
};
