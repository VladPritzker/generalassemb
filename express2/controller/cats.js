const Cat = require('../modules/cat');
const Dog = require('../modules/dogs');


module.exports = {
  index,
};

function index(req, res) {
  const cats = Cat.getAll();
  res.json(cats);
}

function index(req, res) {
  const dogs = Dog.getAll();
  res.json(dogs);
}