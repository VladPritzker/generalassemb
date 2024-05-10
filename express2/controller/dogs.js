const Dog = require('../modules/dogs');  // Likely meant to be '../models/dogs' if that's your structure

module.exports = {
  index,
};

function index(req, res) {
  const dogs = Dog.getAll();
  res.json(dogs);
}
