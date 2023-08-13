import * as Pokedex from 'pokeapi-js-wrapper'
import React, { useRef, useState } from 'react'

function Modal_move({ moves, setSelected, setSelectedMoves }) {
    const selectRef = useRef(null)
    const [move, setMove] = useState(null)
    const pokedex = new Pokedex.Pokedex()

    async function fetch_move(moveName) {
        const result = await pokedex.getMoveByName(moveName)
        /* let en_entry = result.effect_entries.filter(
            (entry) => entry.language.name == 'en'
        )*/
        setMove(result)
    }

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                onChange={() => fetch_move(selectRef.current.value)}
            >
                {['', ...moves].map((moveName) => {
                    return <option key={moveName}>{moveName}</option>
                })}
            </select>
            {move !== null && (
                <div>
                    <div>Type: {move.type.name}</div>
                    <div>Power: {move.power}</div>
                    <div>PPs: {move.pp}</div>
                    <div>
                        Description: {move.effect_entries[0].short_effect}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal_move
