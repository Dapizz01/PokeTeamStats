import React from 'react'
import ModalStats from './stats/ModalStats'
import ModalAbility from './ability/ModalAbility'
import ModalMoveContainer from './move/ModalMoveContainer'

function ModalCard({ pokemon, update_pokemon }) {
    // TODO: info da mettere: immagine, nome, tipi, abilità, stats, mosse
    console.log(pokemon)
    return (
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
                        <ModalStats stats={pokemon.raw.stats}></ModalStats>
                        <ModalAbility
                            pokemon={pokemon}
                            key={pokemon.id + 'ability'}
                        ></ModalAbility>
                        <ModalMoveContainer
                            pokemon={pokemon}
                            key={pokemon.id + 'move'}
                        ></ModalMoveContainer>
                    </div>
                </div>
            </form>
            <form
                method="dialog"
                className="modal-backdrop"
                /*onClick={() => update_pokemon(pokemon)}*/
            >
                <button>close</button>
            </form>
        </>
    )
}

export default ModalCard
