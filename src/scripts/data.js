async function getCharacterListFromAPI() {
  // API REST
  //Paso 1: solicitar al servidor los dtos, recibiendo una respuesta
  const httpResponse = await fetch(
    "https://dragonball-api.com/api/characters?limit=30"
  );
  // Paso 2: proceso la respuesta
  const characters = await httpResponse.json();
  return characters;
}

async function getCharacterDetailFromAPIById(id) {
  const httpResponse = await fetch(
    `https://dragonball-api.com/api/characters/${id}`
  );
  const character = await httpResponse.json();
  return character;
}
