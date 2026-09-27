const pokemon = [
    {
        name: "Squirtle",
        image: "Squirtle with sunglasses.jpg",
        color: "blue"
    },
    {
        name: "Bulbasaur",
        image: "Bulbasaur gamer.jpg",
        color: "green"
    },
    {
        name: "Charmander",
        image: "download (2).jpg",
        color: "red"
    }
]
const button =
document.getElementById("pokemonButton")
const name =
document.getElementById("pokemonName")
const image =
document.getElementById("pokemonPhoto")

button.addEventListener("click",
    function() {
        const randomPokemon =
    pokemon[Math.floor(Math.random() * pokemon.length)];
        name.textContent = randomPokemon.name;
        name.style.color = randomPokemon.color;
        image.src = randomPokemon.image; image.style.display = "block"
    });