const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchCondition);

function searchCondition() {
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {searchAndDisplayResults(data);
            })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    

    function searchAndDisplayResults(inputText) {
        // Assume the fetched JSON data is stored in a variable called 'jsonData'
        const jsonData = inputText;
        const input = document.getElementById('searchInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        
        
        // Check if the search text contains keywords
        if (input.includes("country") || input.includes("countries")) {
            console.log("country");
            resultDiv.innerHTML = '';
            jsonData.countries.forEach(country => {
                country.cities.forEach(city => {
                console.log(`<h2>${city.name}</h2>`);
                resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                console.log(`<img src="./${city.imageUrl}" alt="hjh">`);
                resultDiv.innerHTML += `<img src="./${city.imageUrl}" alt="hjh">`;
                console.log(`<p>${city.description}</p>`);
                resultDiv.innerHTML += `<p>${city.description}</p>`;
                });
            });
        } else if (input.includes("temple") || input.includes("temples")) {
            console.log("temple");
            resultDiv.innerHTML = '';
            jsonData.temples.forEach(temple => {
                console.log(`<h2>${temple.name}</h2>`);
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                console.log(`<img src="./${temple.imageUrl}" alt="hjh">`);
                resultDiv.innerHTML += `<img src="./${temple.imageUrl}" alt="hjh">`;
                console.log(`<p>${temple.description}</p>`);
                resultDiv.innerHTML += `<p>${temple.description}</p>`;
            });
        } else if (input.includes("beach") || input.includes("beaches")) {
            console.log("beach");
            resultDiv.innerHTML = '';
            jsonData.beaches.forEach(beach => {
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                console.log(`<img src="./${beach.imageUrl}" alt="hjh">`);
                resultDiv.innerHTML += `<img src="./${beach.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${beach.description}</p>`;
            });
        } else {
            resultDiv.innerHTML = '';
            resultDiv.innerHTML = 'Sorry no results found.';
        }
    
   }
