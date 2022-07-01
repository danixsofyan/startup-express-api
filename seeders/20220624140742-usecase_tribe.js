'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('usecase_tribes', [{
      name: 'SAAS ERP untuk petani terkait keuangan dan pembukuan',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Grading pada sayur dan buah',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Pelelangan di bidang perikanan ',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'AI/Computer Vision/IoT untuk deteksi kondisi ikan',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Pengelolaan logistik angkutan / pengiriman hasil perikanan dan pertanian dalam kota maupun luar kota',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Pengelolaan gudang',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Single Seller untuk offtaker B2B yang bisa dipercaya oleh Agree',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Pengisian ekosistem smart kawasan yang terintegrasi via anchor “Smart kawasan hub”',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Dashboard Tourist tracker, untuk mengetahui pariwisata mana yang sedang tren atau digemari secara real time',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'NFT Technology untuk Ekosistem Metaverse',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'IOT Track & Trace Solution',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'IOT B2B Services (smart meter : Listrik,PDAM)',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'IOT Manufacturing Solution (utilities, digital twin, OEE Overall Equipment Efektifness)',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Telemedicine',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Optical Character Recogniton Solution Based',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Context Based NLP Modeling',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Visualizing & Analyzing Data',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Local Hardware Supplier untuk Infrastruktur BigBox',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Do It Yourself IP Camera Solution Partner',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('usecase_tribes', [{
      name: 'Vision AI Smart Home Monitoring',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('usecase_tribes', null, {});
  }
};
