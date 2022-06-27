'use strict';
const bcrypt = require('bcrypt');
const saltRounds = 10;
var uuid = require('uuid');

module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = bcrypt.genSaltSync(saltRounds);
    return queryInterface.bulkInsert('Users', [{
      id : '2acdf119-9dca-4f20-9de4-bcd093360a4c',
      firstName: 'Dev',
      lastName: 'Indigo',
      username: 'devindigo',
      email: 'dev@indigo.id',
      password: bcrypt.hashSync('123qweasd', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    // queryInterface.bulkInsert('users', [{
    //   id : uuid.v4(),
    //   firstName: 'Dani',
    //   lastName: 'Sofyan',
    //   username: 'danixsofyan',
    //   email: 'dani@indigo.id',
    //   password: bcrypt.hashSync('123qweasd', salt),
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }]),
    queryInterface.bulkInsert('users', [{
      id : '4fea4a99-4f6d-4617-8379-5afb56075e02',
      firstName: 'Dani',
      lastName: 'Sofyan',
      username: 'danixsofyan',
      email: 'dani@indigo.id',
      password: bcrypt.hashSync('123qweasd', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('Users', [{
      id : '51e368c1-a4c1-4096-b5b6-1b8021cf89b9',
      firstName: 'Pre Startup',
      lastName: 'Discovery',
      username: 'pnd',
      email: 'pnd@indigo.id',
      password: bcrypt.hashSync('123qweasd', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'f0b05c44-7f98-41dc-bd9c-e71a64732d99',
      firstName: 'bandaaceh',
      lastName: 'space',
      username: 'bandaaceh.space',
      email: 'bandaaceh.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'd390dc87-89c0-4299-9eb1-1636b0516376',
      firstName: 'medan',
      lastName: 'space',
      username: 'medan.space',
      email: 'medan.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '6fb407d0-c231-4e5d-aabf-cffdf98ee2b5',
      firstName: 'pekanbaru',
      lastName: 'space',
      username: 'pekanbaru.space',
      email: 'pekanbaru.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '3cbaf83d-4d81-4295-b8b3-b9d18e011ae2',
      firstName: 'padang',
      lastName: 'space',
      username: 'padang.space',
      email: 'padang.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '0045e867-cb24-437c-9bd5-c4ea785908c4',
      firstName: 'tangerang',
      lastName: 'space',
      username: 'tangerang.space',
      email: 'tangerang.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '44eefbac-cab2-4fd3-b830-089d87fa23ce',
      firstName: 'jakarta',
      lastName: 'space',
      username: 'danixsofyan',
      email: 'jakarta.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'b12e524f-851d-43ce-ba0d-4f43585f12fe',
      firstName: 'bogor',
      lastName: 'space',
      username: 'bogor.space',
      email: 'bogor.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'e5dc6b64-a484-4c42-9fd1-a53618a98700',
      firstName: 'bandung',
      lastName: 'space',
      username: 'bandung.space',
      email: 'bandung.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '1daeaa0b-5bf8-46fb-b67d-92fcd7cfaf80',
      firstName: 'jogja',
      lastName: 'space',
      username: 'jogja.space',
      email: 'jogja.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '6d55dbf7-ac35-425c-b5a6-d22256706b01',
      firstName: 'solo',
      lastName: 'space',
      username: 'solo.space',
      email: 'solo.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'eccf7e21-3259-47bf-bb4e-487d000211b5',
      firstName: 'surabaya',
      lastName: 'space',
      username: 'surabaya.space',
      email: 'surabaya.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'e10e7d0d-9714-4e99-a51d-295f63c1539a',
      firstName: 'malang',
      lastName: 'space',
      username: 'malang.space',
      email: 'malang.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'ffb4c302-7a1b-4c30-849e-3dfb980455c6',
      firstName: 'denpasar',
      lastName: 'space',
      username: 'denpasar.space',
      email: 'denpasar.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : '47a4d7da-33d8-469f-a58f-333d03cf2a8a',
      firstName: 'makasar',
      lastName: 'space',
      username: 'makasar.space',
      email: 'makasar.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('users', [{
      id : 'a6c37a9d-8967-469a-8dd3-195e1ba473a0',
      firstName: 'balikpapan',
      lastName: 'space',
      username: 'balikpapan.space',
      email: 'balikpapan.space@indigo.id',
      password: bcrypt.hashSync('SpaceinDigo2022', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
