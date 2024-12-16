function getCharacterIdFromUrl() {
  const params = new URLSearchParams(document.location.search);
  return parseInt(params.get("characterId"));
}

function getCharacterInfoById(id) {
  return characters.items.find((character) => character.id === id);
  /*
 1ª FORMA
  function findCharacterById(character) {
    return character.id === characterId;
 }
 const dbCharacter = characters.items.find(findCharacterById);
*/

  /*
2ª FORMA 
*/
  // const dbCharacter = characters.items.find(
  //     (character) => character.id === characterId
  //   );

  // 3ª Forma
  // let dbCharacter = null;
  // for (let character of characters.item) {
  //   if (character.id === characterId) {
  //     dbCharacter = character;
  //   }
  // }
}

function renderDetailCharacterUI(character) {
  const characterImg = document.createElement("img");
  characterImg.src = character.image;

  const characterName = document.createElement("p");
  characterName.textContent = `${character.name} - ${character.race}`;

  const containerElement = document.querySelector("main");
  containerElement.appendChild(characterImg);
  containerElement.appendChild(characterName);
}

const characterId = getCharacterIdFromUrl(); // paso 1: obtener el id de la URL
const dbCharacter = getCharacterInfoById(characterId); // paso 2: Buscar la información de detalle del personaje
renderDetailCharacterUI(dbCharacter); // pintar en la UI el personaje
