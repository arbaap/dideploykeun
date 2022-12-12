import React from "react";
import Pokemon from "./Pokemon";
import StateStore from "../lib/StateStore";
import axios from "axios";
import { useEffect } from "react";

export const Main = () => {
  let url = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  const addPokemons = StateStore((state) => state.addPokemons);
  useEffect(() => {
    axios.get(url).then((response1) => {
      let results = response1.data.results;
      for (let i = 0; i < results.length; i++) {
        let name = results[i].name;
        axios.get(results[i].url).then((response2) => {
          let result2 = response2.data;
          let image = result2.sprites.other["official-artwork"].front_default;
          let id = result2.id;
          axios
            .get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            .then((response3) => {
              let result3 = response3.data.flavor_text_entries;
              for (let j = 0; j < result3.length; j++) {
                if (result3[j].language.name == "en") {
                  let introduction = result3[j].flavor_text;
                  addPokemons({
                    name: name,
                    image: image,
                    introduction: introduction,
                  });
                  break;
                }
              }
            });
        });
        console.log(i);
      }
    });
  }, [url]);

  const listPokemon = StateStore((state) => state.pokemons);
  return (
    <div className="main-wrapper">
      <div className="main">
        <div className="hello-container">
          <h1>Hello, Pokemon hunter</h1>
          <h2>Selamat datang di dunia Pokemon</h2>
        </div>
        <div className="pokemon-container">
          <h3>List Pokemon</h3>
          <div className="list-card">
            {listPokemon.map((pokemon) => {
              return (
                <Pokemon
                  name={pokemon.name}
                  image={pokemon.image}
                  introduction={pokemon.introduction}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
