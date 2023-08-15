import React from 'react'
import { usePokemonsDispatch } from '../context/PokemonContext'

// pokemon -> Object of Pokemon class (not the Pokemon from the Context)
function CompactCard({ pokemon, focus }) {
    const pokemonDispatch = usePokemonsDispatch()

    return (
        <div className="card card-side basis-full sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/6 h-1/4 hover:scale-110 ease-out duration-500">
            <figure
                className="w-1/3 cursor-pointer"
                onClick={() => focus(pokemon.id)}
            >
                <img
                    src={pokemon.raw.sprites.other.dream_world.front_default}
                    key={pokemon.id}
                />
            </figure>
            <div className="card-body w-2/3">
                <div>{pokemon.raw.name}</div>
                <div>
                    Types:
                    {pokemon.raw.types.map((type) => {
                        return (
                            <span key={type.type.name}>{type.type.name}</span>
                        )
                    })}
                </div>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-primary"
                        onClick={() =>
                            pokemonDispatch({
                                type: 'deletePokemon',
                                id: pokemon.id,
                            })
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CompactCard
