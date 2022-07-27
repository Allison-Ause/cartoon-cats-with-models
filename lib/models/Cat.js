const pool = require('../utils/pool');

module.exports = class Cat {
  id;
  name;
  type;
  url;
  year;
  lives;
  isSidekick;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.url = row.url;
    this.year = row.year;
    this.lives = row.lives;
    this.isSidekick = row.issidekick;
  }

  static async getAll() {
    //sql query to get all the rows from the pool
    const { rows } = await pool.query('SELECT * FROM cats;');
    // map through to make a new object for each
    return rows.map((row) => new Cat(row));
  }
};
