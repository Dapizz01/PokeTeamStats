import React, { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import * as Pokedex from 'pokeapi-js-wrapper'

function Input_single({ addPokemon }) {
    const pokedex = new Pokedex.Pokedex()

    const { data, status } = useQuery(['fetch_all'], async () => {
        return await pokedex.getPokemonsList()
    })

    const selectRef = useRef(null)

    // TODO: aggiungere loading spinner (sul bottone della ricerca?)

    return (
        <div className="flex-auto">
            {status === 'error' && <p>Error fetching pokemons!</p>}
            {status === 'loading' && (
                <span className="loading loading-spinner"></span>
            )}
            {status === 'success' && (
                <div className="join w-full">
                    <select
                        className="select select-bordered w-full join-item"
                        ref={selectRef}
                    >
                        {data.results.map((entry) => {
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
            )}
        </div>
    )
}

export default Input_single
