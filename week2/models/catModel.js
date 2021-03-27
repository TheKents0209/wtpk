'use strict';

const pool = require('../database/db');
const promisePool = pool.promise();

const getAllCats = async () => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query('SELECT * FROM wop_cat');
    console.log('something back from db?', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const getAllCatsSort = async (order) => {
  try {
    // TODO: do the LEFT (or INNER) JOIN to get owner name too.
    const [rows] = await promisePool.query(`SELECT * FROM wop_cat ORDER BY ${order}`);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

const insertCat = async (cat,picture) => {
  const [row] = await promisePool.execute('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?)', [cat.name, cat.age, cat.weight, cat.owner, picture]);
  console.log('insert row', row);
  return row.insertId;
};

const getCatById = async (id) => {
  try{
    const [row] = await promisePool.query(`SELECT * FROM wop_cat WHERE cat_id = ${id}`);
    return row;
  }catch (e) {
    console.error('error', e.message);
  }
};

const updateCat = async (cat, catid) => {
  try{
    const [row] = await promisePool.query(`SELECT * FROM wop_cat`);
    return row;
  }catch (e) {
    console.error('error', e.message);
  }
  // try{
  //   const [row] = await promisePool.execute('UPDATE wop_cat SET (name, age, weight, owner) VALUES (?, ?, ?, ?)' + `WHERE cat_id = ${catid}`, [cat.name, cat.age, cat.weight, cat.owner]);
  //   console.log("row inside updatecat", row);
  //   return row;
  // }catch (e) {
  //   console.error('error', e.message);
  // }
};

module.exports = {
  getAllCats,
  getAllCatsSort,
  insertCat,
  getCatById,
  updateCat,
};
