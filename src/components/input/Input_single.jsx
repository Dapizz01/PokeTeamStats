import React, { useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import Pokemon from '../../templates/pokemon.js'

function Input_single({ pokemons, setPokemons }) {
    const { data, status } = useQuery(['fetch_all'], async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
        return res.json()
    })

    const selectRef = useRef(null)

    // TODO: aggiungere loading spinner (sul bottone della ricerca?)
    const addPokemon = async () => {
        let res = await fetch(
            'https://pokeapi.co/api/v2/pokemon/' + selectRef.current.value
        )
        res = await res.json()
        setPokemons([
            ...pokemons,
            new Pokemon(res, res.name, null, null, [null, null, null, null]),
        ])
    }

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
                        onClick={addPokemon}
                    >
                        Add
                    </button>
                </div>
            )}
        </div>
    )
}

export default Input_single
