import React, { useEffect, useRef, useState } from 'react'
import { usePokemonsDispatch } from '../context/PokemonContext'
import Pokemon from '../../templates/pokemon'
import * as Pokedex from 'pokeapi-js-wrapper'

function InputSingle() {
    const [pokemonNames, setPokemonNames] = useState(null)
    const selectRef = useRef(null)
    const pokemonsDispatch = usePokemonsDispatch()
    const pokedex = new Pokedex.Pokedex()

    useEffect(() => {
        async function fetchPokemonNames() {
            const result = await pokedex.getPokemonsList()
            setPokemonNames(result)
        }
        fetchPokemonNames()
    }, [])

    const addPokemon = async (pokemonName) => {
        const result = await pokedex.getPokemonByName(pokemonName)
        pokemonsDispatch({
            type: 'addPokemon',
            pokemon: new Pokemon(result, null, null, null, [
                null,
                null,
                null,
                null,
            ]),
        })
    }

    // TODO: aggiungere loading spinner (sul bottone della ricerca?)

    return (
        <div className="flex-auto">
            (
            <div className="join w-full">
                <select
                    className="select select-bordered w-full join-item"
                    ref={selectRef}
                >
                    {pokemonNames !== null &&
                        pokemonNames.results.map((entry) => {
                            return (
                                <option key={entry.name}>{entry.name}</option>
                            )
                        })}
                </select>
                <button
                    className="btn rounded-r-full join-item"
                    onClick={() => addPokemon(selectRef.current.value)}
                >
                    Add
                </button>
            </div>
            )
        </div>
    )
}

export default InputSingle
