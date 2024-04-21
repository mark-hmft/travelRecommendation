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
        // Initialize an empty result string
        let result = "";
    
        // Check if the search text contains keywords
        if (input.includes("country")) {
            jsonData.countries.forEach(country => {
                country.cities.forEach(city => {
                resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                resultDiv.innerHTML += `<img src="${city.imageURL}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${city.description}</p>`;
                });
            });
        }
        
    
        if (searchText.includes("temple")) {
            jsonData.temples.forEach(temple => {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                resultDiv.innerHTML += `<img src="${country.imageURL}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${country.description}</p>`;
            });
        }
    
        if (searchText.includes("beach")) {
            jsonData.beaches.forEach(beach => {
                resultDiv.innerHTML += `<h2>${country.name}</h2>`;
                resultDiv.innerHTML += `<img src="${country.imageURL}" alt="hjh">`;
                resultDiv.innerHTML += `<p>${country.description}</p>`;
            });
        }
    
   }
