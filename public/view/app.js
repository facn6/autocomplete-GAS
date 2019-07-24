// const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// const cities = [];

// fetch(endpoint)
//   .then(response => response.json())
//   .then((data) => {
//     cities.push(...data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const getMatches = (e) => {
    console.log(this);
    console.log(e.target.value);
    fetch(`api/word-list/${e.target.value}`);
        .then(response => response.json())
        .then((data) => {
            
        })
        .catch((error) => {
        console.log(error);
        });

}


// function displayMatches () {
//     const matchArray = findMatches(this.value, cities)
//     const html = matchArray.map(place => {
//         const regex = new RegExp(this.value, 'gi');
//         const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
//         const stateName = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
//         return `
//             <li>
//                 <span class="name">${cityName}, ${stateName}</span>
//                 <span class="population">${numberWithcommas(place.population)}</span>
//             </li>
//             `;
//     }).join('');
//     suggestions.innerHTML = html;
//     console.log(this.value);
// }


const searchInput = document.querySelector('.search-bar');
const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', getResult);
searchInput.addEventListener('keyup', getMatches);