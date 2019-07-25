
const getMatches = (e) => {
    while (suggestions.hasChildNodes()) {
        suggestions.removeChild(suggestions.lastChild);
    }
    if(e.target.value.length > 0) {
        fetch(`api/word-list/${e.target.value}`)
            .then(response => response.json())
            .then((data) => {
                data.words.map(word => {
                    const wordSuggestion = document.createElement("li");
                    wordSuggestion.addEventListener('onclick', getResult);
                    wordSuggestion.classList.add('word')
                    wordSuggestion.innerText = word;
                    suggestions.appendChild(wordSuggestion);
                });
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        const prompt = document.createElement("li");
        prompt.innerText = "Search for a word";
        suggestions.appendChild(prompt);
    }

}

const getResult = (e) => {
    const val = e.target.value;
    e.preventDefault(); 
    if (val.length < 1) {
        alert("Enter A Word To Search !!");
    }
}


const searchInput = document.querySelector('.search-bar');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', getResult);
searchInput.addEventListener('keyup', getMatches);
searchInput.addEventListener('keypress',function(e){
    var key = e.which || e.keyCode;
   

    if (key === 13) { 
      getResult(e);
        }
    }
);