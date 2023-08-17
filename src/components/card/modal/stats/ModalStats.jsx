import React, { useEffect, useState } from 'react'
import { getPokemonByID, usePokemons } from '../../../context/PokemonContext'
import Loading from '../../../Loading'

function ModalStats({ pokemon_id }) {
    const pokemons = usePokemons()
    const [pokemon, setPokemon] = useState(undefined)

    useEffect(() => {
        const result = pokemons.filter((p) => p.id === pokemon_id)[0]
        setPokemon(result)
    }, [])

    const max_stats = {
        hp: 255,
        attack: 180,
        defense: 230,
        'special-attack': 180,
        'special-defense': 230,
        speed: 180,
    }

    return (
        <>
            {pokemon === undefined ? (
                <Loading></Loading>
            ) : (
                pokemon.raw.stats.map((stat) => {
                    return (
                        <div className="w-full" key={stat.stat.name}>
                            <span>{stat.stat.name}</span>
                            <progress
                                className="progress"
                                value={stat.base_stat}
                                max={max_stats[stat.stat.name]}
                            >
                                {stat.base_stat}
                            </progress>
                        </div>
                    )
                })
            )}
        </>
    )
}

export default ModalStats
