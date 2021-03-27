'use strict';
const pool = require('../database/db');
const promisePool = pool.promise();

const getAllUsers = async () => {
  try {
    const [rows] = await promisePool.query('SELECT user_id, name, email FROM wop_user');
    console.log('something back from db?', rows);
    return rows;
  } catch (e) {
    console.error('error', e.message);
  }
};

// const insertCat = async (cat,picture) => {
//   const [row] = await promisePool.execute('INSERT INTO wop_cat (name, age, weight, owner, filename) VALUES (?, ?, ?, ?, ?)', [cat.name, cat.age, cat.weight, cat.owner, picture]);
//   console.log('insert row', row);
//   return row.insertId;
// };

const insertUser = async (user) => {
  try{
    const [row] = await promisePool.execute('INSERT INTO wop_user (name, email, password) VALUES (?, ?, ?)', [user.name, user.email, user.passwd]);
    return row;
  }catch (e) {
    console.error('error', e.message);
  }
}

const getUserById = async (id) => {
  try{
    const [row] = await promisePool.query(`SELECT user_id, name, email FROM wop_user WHERE user_id = ${id}`);
    return row;
  }catch (e) {
    console.error('error', e.message);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  insertUser,
};
