import * as Pokedex from 'pokeapi-js-wrapper'
import React, { useRef, useState, useEffect } from 'react'
import { usePokemonsDispatch } from '../../../context/PokemonContext'

function ModalMove({ current_move, moves, index, pokemon_id }) {
    const selectRef = useRef(null)
    const [move, setMove] = useState('')
    const pokedex = new Pokedex.Pokedex()
    const pokemonDispatch = usePokemonsDispatch()

    useEffect(() => {
        if (move !== '') {
            fetchMove()
            pokemonDispatch({
                type: 'setMove',
                pokemon_id: pokemon_id,
                move: move,
                moveIndex: index,
            })
        }
    }, [move])

    async function fetchMove(moveName) {
        const result = await pokedex.getMoveByName(moveName)
        /* let en_entry = result.effect_entries.filter(
            (entry) => entry.language.name == 'en'
        )*/
        setMove(result)
    }

    function moveList() {
        if (current_move !== null) {
            return moves
        } else {
            return ['', ...moves]
        }
    }

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                defaultValue={current_move}
                onChange={() => setMove(selectRef.current.value)}
            >
                {moveList().map((moveName) => {
                    if (moveName === '') {
                        return <option key={moveName} hidden></option>
                    } else {
                        return <option key={moveName}>{moveName}</option>
                    }
                })}
            </select>
            {move !== '' && (
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

export default ModalMove
