// Rick and Morty API
// https://jack72828383883.medium.com/how-to-use-javascript-fetch-to-display-api-results-in-html-7aa59936ed30



fetch("https://rickandmortyapi.com/api/character/")
   .then(response => response.json())
   .then(characters => showCharacters(characters.results));

showCharacters = characters => {
    let i = 0;

    const charactersForm = document.getElementById("character-data");
    // console.log(characters);
    

    characters.forEach(character => {
      var characterId = "character" + i;

      var characterElement = document.createElement("input");
      characterElement.type = "radio";
      characterElement.name = "fav_character";
      characterElement.id = characterId;
      characterElement.value ="character";

      var label = document.createElement("label");
      label.htmlFor = characterId;
      
      var description = document.createTextNode("Character Name: " + character.name);
      label.appendChild(description);

      var newline = document.createElement("br");
      
      charactersForm.append(characterElement);
      charactersForm.append(label);
      charactersForm.append(newline);

      i++;
    });
  }


// Generating new radio buttons: https://www.techiedelight.com/create-radio-button-dynamically-javascript/#:~:text=To%20create%20a%20radio%20button,appendChild()%20method.
// Problem: It lets you select multiple ones and they aren't unique.
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