import React from "react";
import PokemonImg from "./PokemonImg/PokemonImg.component";

const PokemonList = ({pokemon}) => {

    return (
            pokemon.map(p => {
              const [name, url] = p;
              return (
                <div key={name}>
                    <PokemonImg url={url} />
                  <h1>{name}</h1>
                </div>
              )
            })

    )
}

export default PokemonList;