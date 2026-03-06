function buscarPokemon() {
  let nome = document.getElementById("nome").value.toLowerCase();

  fetch("https://pokeapi.co/api/v2/pokemon/" + nome)
    .then(res => res.json())
    .then(p => mostrarPokemon(p))
    .catch(() => alert("Pokémon não encontrado"));
}

function pokemonAleatorio() {
  let id = Math.floor(Math.random() * 151) + 1;

  fetch("https://pokeapi.co/api/v2/pokemon/" + id)
    .then(res => res.json())
    .then(p => mostrarPokemon(p));
}

function mostrarPokemon(p) {
  document.getElementById("pokemon").innerHTML = `
    <h2>${p.name.toUpperCase()}</h2>
    <img src="${p.sprites.front_default}">
    <p>⚡ Tipo: ${p.types[0].type.name}</p>
    <p>❤️ HP: ${p.stats[0].base_stat}</p>
    <p>💪 Ataque: ${p.stats[1].base_stat}</p>
  `;
}
