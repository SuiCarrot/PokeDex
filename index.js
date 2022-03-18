const express = require("express");
const path = require("path");
const app = express();
const port = 3000; // Const para armanezar a porta do servidor

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const pokedex = [
    {   
        numero: "001",
        nome: "Bulbasaur",
        tipo: "Grass and Poison",
        imagem: "img/bulbasaur.png",
        descricao: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
        altura: "0.7m",
        peso: "6.9kg",
        categoria: "Seed",
        habilidade: "Overgrow" 
    },
    {   
        numero: "004",
        nome: "Charmander",
        tipo: "Fire",
        imagem: "img/charmander.png",
        descricao: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        altura: "0.6m",
        peso: "8.5kg",
        categoria: "Lizard",
        habilidade: "Blaze"
    },
    {   
      numero: "007",
      nome: "Squirtle",
      tipo: "Water",
      imagem: "img/squirtle.png",
      descricao: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
      altura: "0.5m",
      peso: "9.0kg",
      categoria: "Tiny Turtle",
      habilidade: "Torrent"
  },
]


app.get("/", (req, res) => {
  res.render("index", {pokedex});
});

app.get("/detalhes/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokedex[id]
  res.render("detalhes", {pokemon});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
