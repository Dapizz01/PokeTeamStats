import React, { useEffect, useState } from 'react'
import ModalStats from './stats/ModalStats'
import ModalAbility from './ability/ModalAbility'
import ModalMoveContainer from './move/ModalMoveContainer'
import { usePokemons } from '../../context/PokemonContext'

function ModalCard({ pokemon_id }) {
    // TODO: info da mettere: immagine, nome, tipi, abilità, stats, mosse

    const [pokemon, setPokemon] = useState(null)
    const pokemons = usePokemons()

    useEffect(() => {
        for (let p of pokemons) {
            if (p.id === pokemon_id) setPokemon(p)
        }
    }, [])

    return (
        <>
            {pokemon !== null && (
                <>
                    <form method="dialog" className="modal-box">
                        <div className="w-full text-center">
                            <figure className="flex justify-center">
                                <img
                                    src={
                                        pokemon.raw.sprites.other.dream_world
                                            .front_default
                                    }
                                    className="w-1/2"
                                />
                            </figure>
                            <div>
                                <h2>{pokemon.raw.name}</h2>
                                <div>Types</div>
                                <ModalStats
                                    stats={pokemon.raw.stats}
                                ></ModalStats>
                                <ModalAbility
                                    current_ability={pokemon.ability}
                                    abilities={pokemon.raw.abilities}
                                    pokemon_id={pokemon.id}
                                    key={pokemon.id + 'ability'}
                                ></ModalAbility>
                                {/*<ModalMoveContainer
                                    pokemon={pokemon}
                                    key={pokemon.id + 'move'}
                                ></ModalMoveContainer>*/}
                            </div>
                        </div>
                    </form>
                    <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                    </form>
                </>
            )}
        </>
    )
}

export default ModalCard
