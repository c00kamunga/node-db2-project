
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 1123345123, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 2, VIN: 11231253, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 3, VIN: 112312563, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 4, VIN: 11231823, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 5, VIN: 1123661023, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 6, VIN: 1123122233, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 7, VIN: 11231423, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
        {id: 8, VIN: 11231256756753, Make: 'lambo', Model: 'murcielago', Mileage: 234234, "Transmission Type": 'manual', "Title Status": "clean" },
      ]);
    });
};
