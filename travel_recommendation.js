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
    btnSearch.addEventListener('click', searchCondition);

    function searchAndDisplayResults(inputText) {
        // Assume the fetched JSON data is stored in a variable called 'jsonData'
        const jsonData = inputText;
        const input = document.getElementById('searchInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
        
        // Check if the search text contains keywords
        if (input.includes("country")) {
            console.log("country");
            jsonData.countries.forEach(country => {
                country.cities.forEach(city => {
                resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                resultDiv.innerHTML += `<img src="./${city.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${city.description}</p>`;
                });
            });
        }
        
    
        if (input.includes("temple")) {
            console.log("temple");
            jsonData.temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                resultDiv.innerHTML += `<img src="./${temple.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${temple.description}</p>`;
            });
        }
    
        if (input.includes("beach")) {
            console.log("beach");
            jsonData.beaches.forEach(beach => {
                resultDiv.innerHTML += `<h2>${beach.name}</h2>`;
                console.log(`<img src="${beach.imageUrl}" alt="hjh">`);
                resultDiv.innerHTML += `<img src="./${beach.imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${beach.description}</p>`;
            });
        } else {
            resultDiv.innerHTML = 'Sorry no results found.';
        }
    
   }
