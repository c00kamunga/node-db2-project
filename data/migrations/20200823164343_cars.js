
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments(); //increment for ID
      tbl.integers('VIN').unique.notNullable() //VIN number for car that is unique and inexcuseable.
      tbl.string('Make').notNullable() //manufacturer column and inexcusable
      tbl.string('Model').notNullable() //model column and inexcusable
      tbl.integer('Mileage')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
