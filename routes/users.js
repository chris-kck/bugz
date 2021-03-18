var express = require('express');
var router = express.Router();
var { Sequelize, Model, DataTypes } = require('sequelize');
var pg = require('pg');


const myfunc = async () =>{
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const password = process.env.DB_PWD;
const port = process.env.DB_PORT;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  "dialectOptions": {
    "ssl": true
  },
  logging: false,
})

class Dog extends Model {};

  Dog.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'dog',
    timestamps: false
  })


const name = 'Roger';
const age = 8;
const result = await Dog.create({ name, age });

const results = await Dog.findAll()
  return results;
}

/* GET users listing. */
router.get('/:user', function(req, res, next) {
  const results = myfunc().then( resp =>{res.json({haha:`respond with a resource ${resp}`})});

});

module.exports = router;
