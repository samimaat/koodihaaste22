// Rick and Morty API
// https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30

fetch("https://rickandmortyapi.com/api/character/")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = characters => {
    const charactersDiv = document.querySelector("#character-data");
    console.log(characters);
    
    characters.forEach(character => {
      const characterElement = document.createElement("p");
      characterElement.innerText = "Character Name: " + character.name;
      charactersDiv.append(characterElement);
    });
  }