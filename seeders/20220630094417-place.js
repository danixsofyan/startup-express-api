'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('places', [{
      name: 'Indigo Hub Bandung',
      username: 'iHubBandung',
      type_place: 1,
      capacity: 20,
      image: 'public/uploads/hub.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Hub Jogja',
      username: 'iHubJogja',
      type_place: 1,
      capacity: 20,
      image: 'public/uploads/hub.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Hub Makasar',
      username: 'iHubMakasar',
      type_place: 1,
      capacity: 20,
      image: 'public/uploads/hub.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Aceh',
      username: 'iSpaceAceh',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Padang',
      username: 'iSpacePadang',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Medan',
      username: 'iSpaceMedan',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Pekanbaru',
      username: 'iSpacePekanbaru',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Bogor',
      username: 'iSpaceBogor',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Tangerang',
      username: 'iSpaceTangerang',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Jakarta',
      username: 'iSpaceJakarta',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Bandung',
      username: 'iSpaceBandung',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Solo',
      username: 'iSpaceSolo',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Jogja',
      username: 'iSpaceJogja',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Malang',
      username: 'iSpaceMalang',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Surabaya',
      username: 'iSpaceSurabaya',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Denpasar',
      username: 'iSpaceDenpasar',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Balikpapan',
      username: 'iSpaceBalikpapan',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('places', [{
      name: 'Indigo Space Makasar',
      username: 'iSpaceMakasar',
      type_place: 2,
      capacity: 20,
      image: 'public/uploads/space.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('places', null, {});
  }
};
