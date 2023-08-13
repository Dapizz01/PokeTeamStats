import React from 'react'
import Modal_stats from './stats/Modal_stats'
import Modal_ability from './ability/Modal_ability'
import Modal_move_container from './move/Modal_move_container'

function Modal_card({ pokemon, update_pokemon }) {
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
                        <Modal_stats stats={pokemon.raw.stats}></Modal_stats>
                        <Modal_ability
                            pokemon={pokemon}
                            key={pokemon.id + 'ability'}
                        ></Modal_ability>
                        <Modal_move_container
                            pokemon={pokemon}
                            key={pokemon.id + 'move'}
                        ></Modal_move_container>
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

export default Modal_card
