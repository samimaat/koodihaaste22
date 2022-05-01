// Rick and Morty API
// https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30

fetch("https://rickandmortyapi.com/api/character/")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = characters => {
    const charactersDiv = document.querySelector("#character-data");
    console.log(characters);
    
    characters.forEach(character => {
      const characterElement = document.createElement("input");
      characterElement.type ="radio";

      const label = characterElement.createElement("label");
      
      const description = document.createTextNode("Character Name: " + character.name);
      label.appendChild(description);

      var newline = document.createElement("br");
      
      charactersDiv.appendChild(characterElement);
      charactersDiv.appendChild(label);
      charactersDiv.appendChild(newline);
    });
  }

document.getElementById('submit2').onclick = function() {
    var radiobox = document.createElement('input');
    radiobox.type = 'radio';
    radiobox.id = 'contact';
    radiobox.value = 'email';
 
    var label = document.createElement('label')
    label.htmlFor = 'contact';
 
    var description = document.createTextNode('Email');
    label.appendChild(description);
 
    var newline = document.createElement('br');
 
    var container = document.getElementById('container');
    container.appendChild(radiobox);
    container.appendChild(label);
    container.appendChild(newline);
}