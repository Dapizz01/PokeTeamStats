import React from 'react'

function Compact_card({ pokemon, delete_card }) {
    return (
        <div className="card card-side">
            <figure>
                <img
                    src={pokemon.raw.sprites.other.dream_world.front_default}
                    key={pokemon.pokemon_id}
                    width="500px"
                />
            </figure>
            <div className="card-body">
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
                        onClick={() => delete_card(pokemon.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Compact_card
