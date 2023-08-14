import React, { useState, useRef } from 'react'
import CompactCard from './CompactCard'
import ModalCard from './modal/ModalCard'
import { usePokemons } from '../context/PokemonContext'

function CompactCardContainer() {
    const pokemons = usePokemons()
    const [focused, setFocused] = useState()
    const modal = useRef()

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
                {focused ? <ModalCard pokemon={focused}></ModalCard> : null}
            </dialog>
        </>
    )
}

export default CompactCardContainer
