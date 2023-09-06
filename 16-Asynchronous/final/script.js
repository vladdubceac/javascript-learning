'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/*
const getCountryData = function (countryName) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    const html = `<article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('moldova');
getCountryData('usa');
getCountryData('portugal');
getCountryData('germany');
*/

const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} million people</p>
            <p class="country__row"><span>🗣️</span>${
              data.languages[Object.keys(data.languages)[0]]
            }</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[Object.keys(data.currencies)[0]].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryAndNeighbour = function (countryName) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour countries (2)
    const neighbours = data.borders;
    console.log(neighbours);
    if (!neighbours) return;

    // AJAX call country 2
    for (let n of neighbours) {
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${n}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(this.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    }
  });
};

// getCountryAndNeighbour('moldova');
getCountryAndNeighbour('usa');

setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
      console.log('3 second passed');
      setTimeout(() => {
        console.log('4 second passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
