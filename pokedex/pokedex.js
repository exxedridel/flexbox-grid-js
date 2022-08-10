/*
    Pokedex
    
    Write an async function 
        that uses fetch() to fetch all 
        Pokemon from pokemon.json
    
    Display all the Pokemon
        ID, English Name, 
        Type(s), 
        Stats: HP/Speed/Attack/SpAttack/Defense/SpDefense
*/

async function getAllPokemon() {
  let response = await fetch("pokemon.json");
  let data = await response.json();
  return data;
//   return data.slice(0 , 151);
}

function getPokemonHtml(aPokemon) {
  return `
      <div class="a-pokemon">
         <div class="a-pokemon-id"># ${aPokemon.id}</div>
       
         <div class="a-pokemon-name">${aPokemon.name.english}</div>
         <div class="a-pokemon-type">${aPokemon.type.join(" / ")}</div>
       
         <div class="a-pokemon-stat">HP: ${aPokemon.base.HP}</div>
         <div class="a-pokemon-stat">Spd: ${aPokemon.base.Speed}</div>
         <div class="a-pokemon-stat">Atk: ${aPokemon.base.Attack}</div>
         <div class="a-pokemon-stat">Sp Atk: ${aPokemon.base.SpAttack}</div>
         <div class="a-pokemon-stat">Def: ${aPokemon.base.Defense}</div>
         <div class="a-pokemon-stat">Sp Def: ${aPokemon.base.SpDefense}</div>
      </div>
   `;
}

function displayPokedex(allPokemon) {
//   console.log(allPokemon[150]);
  document.body.innerHTML = `
      <h1 class="title">POKÉDEX</h1>
      <div class="my-pokedex">
         ${allPokemon.map(getPokemonHtml).join("")}
      </div>
   `;
}

getAllPokemon().then(displayPokedex);
