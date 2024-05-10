const cats = [
    { id: 1, name: 'Salem', color: 'black', lovesLasagna: false },
    { id: 2, name: 'Garfield', color: 'orange', lovesLasagna: true },
    { id: 3, name: 'Heathcliff', color: 'orange', lovesLasagna: false },
    { id: 4, name: 'Hobbes', color: 'orange', lovesLasagna: true },
  ];
  
  module.exports = {
    getAll: function () {
      return cats;
    },
  
    getOne: function (id) {
      return cats.find((cat) => cat.id === parseInt(id));
    },
  };