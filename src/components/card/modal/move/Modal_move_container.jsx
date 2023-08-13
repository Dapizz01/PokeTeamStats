import React, { useState } from 'react'
import Modal_move from './Modal_move'

function Modal_move_container({ pokemon }) {
    const [selectedMoves, setSelectedMoves] = useState([])
    const moves = pokemon.raw.moves.map((move) => {
        return move.move.name
    })
    return (
        <div>
            {[0, 1, 2, 3].map((index) => {
                return (
                    <Modal_move
                        moves={moves}
                        selectedMoves={selectedMoves}
                        setSelectedMoves={setSelectedMoves}
                        key={pokemon.id + 'move' + index}
                    ></Modal_move>
                )
            })}
        </div>
    )
}

export default Modal_move_container
