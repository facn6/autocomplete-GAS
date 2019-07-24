

const getMatches = (e) => {
    console.log(this);
    console.log(e.target.value);
    fetch(`api/word-list/${e.target.value}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });

}

const getMatches = (e) => {
    const val = e.target.value;
    console.log(e.target.value);
    if (val.length < 2) {
        
    }

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

searchInput.addEventListener('change', getResult);
searchInput.addEventListener('keyup', getMatches);