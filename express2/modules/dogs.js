const dogs = [
    { id: 1, name: 'Salem', color: 'black', lovesLasagna: false },
    { id: 2, name: 'Garfield', color: 'orange', lovesLasagna: true },
    { id: 3, name: 'Heathcliff', color: 'orange', lovesLasagna: false },
    { id: 4, name: 'Hobbes', color: 'orange', lovesLasagna: true },
];
  
module.exports = {
    getAll: function () {
      return dogs;
    },
  
    getOne: function (id) {
      return dogs.find(dog => dog.id === parseInt(id));
    },
};
