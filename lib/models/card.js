const pool = require("../utils/pool");

module.exports = class Card {
  id;
  name;
  description;
  cost;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.description = row.description;
    this.cost = row.cost;
  }

  static async insert(card) {
    const { rows } = await pool.query(
      `INSERT INTO cards (name, description, cost) 
      VALUES ($1, $2, $3) 
      RETURNING *`, [card.name, card.description, card.cost]
    );

    return new Card(rows[0]);
  }

  static async findAll() {
    const { rows } = await pool.query(`SELECT * FROM cards`);

    return rows.map(row => new Card(row));
  }

  static async delete(id) {
    const { rows } = await pool.query(`DELETE FROM cards WHERE id=$1 RETURNING *`, [id]
    );

    if (!rows[0] return null,
      return new Card(row[0]
    )
  }
};
