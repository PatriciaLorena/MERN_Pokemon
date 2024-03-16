import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AxiosPokemon = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [fetchPokemon, setFetchPokemon] = useState(false);

    useEffect(() => {
        if (fetchPokemon) {
            axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
                .then(response => {
                    setPokemonList(response.data.results);
                })
                .catch(error => {
                    console.error('Error al recuperar Pokémon:', error);
                });
        }
        setFetchPokemon(false);
    }, [fetchPokemon]);

    return (
        <>
            <div className='container d-flex justify-content-center mt-3'>
                <button className='btn btn-dark text-white p-3 font-weight-bold fs-4' onClick={() => setFetchPokemon(true)}>Axios Pokémon</button>
            </div>
            <div className="mt-container d-flex justify-content-center mt-3'">
            {
                (pokemonList.length === 0) 
                    ? <p>Aun no presionas el boton</p>
                    : <ul>
                        {pokemonList.map((pokemon, index) => (
                            <li key={index}>{pokemon.name}</li>
                        ))}
                    </ul>
                }
            </div>
        </>
    );
}

export default AxiosPokemon;
