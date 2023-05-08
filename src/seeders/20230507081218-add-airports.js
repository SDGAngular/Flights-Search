'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[

      {
        name:'Kempegowda International Airport',
        Address:'KIAL Rd, Devanahalli, Bengaluru, Karnataka 560300',
        cityId:7,
        createdAt:new Date(),
        updatedAt: new Date()
        
      },{
        name:'Netaji Subash International Airport',
        Address:'Dumdum Kolkata',
        createdAt:new Date(),
        updatedAt: new Date(),
        cityId:4
      },{
        name:'Indira Gandhi International Airport',
        Address:'New Delhi , Gurugram',
        createdAt:new Date(),
        updatedAt: new Date(),
        cityId:1
      },{
        name:'Lal Bahadur Shastri International Airport ',
        Address:'Babatpur, Uttar Pradesh 221006',
        createdAt:new Date(),
        updatedAt: new Date(),
        cityId:10
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
