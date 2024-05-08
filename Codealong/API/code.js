const button = document.querySelector('button');
const imageDiv = document.querySelector('div');
const header = document.querySelector('header');
let breedSelect;

async function getBreeds() {
  const dogBreedsRes = await fetch(
    'https://dog.ceo/api/breeds/list/all'
  );
  const dogBreeds = await dogBreedsRes.json();

  const dogBreedsArr = Object.keys(dogBreeds.message);

  breedSelect = document.createElement('select');

  dogBreedsArr.forEach((breed) => {
    breedSelect.innerHTML += `<option value=${breed} >${breed}</option>`;
  });

  header.prepend(breedSelect);
}

getBreeds();

button.addEventListener('click', async function () {
  const breed = breedSelect.value;

  const response = await fetch(
    `https://dog.ceo/api/breed/${breed}/images/random`
  );

  const dogPic = await response.json();

  imageDiv.innerHTML = `<img src=${dogPic.message}>`;
});