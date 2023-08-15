import React, { useState, useRef } from 'react'
import CompactCard from './CompactCard'
import ModalCard from './modal/ModalCard'
import { usePokemons } from '../context/PokemonContext'

function CompactCardContainer() {
    const pokemons = usePokemons()
    const [focused, setFocused] = useState()
    const modal = useRef()

    const open_modal = (pokemon) => {
        setFocused(pokemon)
        modal.current.showModal()
    }

    return (
        <>
            <div>
                <div className="flex flex-wrap">
                    {pokemons.map((pokemon) => {
                        return (
                            <CompactCard
                                pokemon={pokemon}
                                focus={open_modal}
                                key={pokemon.id}
                            ></CompactCard>
                        )
                    })}
                </div>
            </div>
            <dialog className="modal" ref={modal}>
                {focused ? (
                    <ModalCard pokemon_id={focused} key={focused}></ModalCard>
                ) : null}
            </dialog>
        </>
    )
}

export default CompactCardContainer
