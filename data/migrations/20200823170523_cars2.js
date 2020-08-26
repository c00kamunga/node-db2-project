
exports.up = function(knex) {
  return knex.schema.alterTable('cars', tbl => {
      tbl.string('Transmission Type')
      tbl.string('Title Status')
  }) 
};

exports.down = function(knex) {
    return knex.schema.alterTable('cars', tbl => {
    tbl.dropColumns('Transmission Type', 'Title Status')
  })
};
