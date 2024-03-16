import React, { useState } from 'react';

const Pokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);

    const fetchPokemon = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then(response => response.json())
        .then(data => {
            const pokemonNames = data.results.map(pokemon => pokemon.name);
            setPokemonList(pokemonNames);
        })
        .catch(error => console.log(error));
    };

    return (
        <>
        <div className='container d-flex justify-content-center mt-3'>
            <button className='btn btn-dark text-white p-3 font-weight-bold fs-4' onClick={fetchPokemon}>Fetch Pokémon</button>
            
        </div>
        <div className="mt-container d-flex justify-content-center mt-3'">
                {pokemonList.length > 0 && (
                    <ul>
                        {pokemonList.map((pokemon, index) => (
                            <li key={index}>{pokemon}</li>
                        ))}
                    </ul>
                )}
            </div>
        </>
        
    );
}

export default Pokemon;