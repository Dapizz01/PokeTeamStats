import React, { useState } from 'react'
import ModalMove from './ModalMove'

function ModalMoveContainer({ pokemon }) {
    const [selectedMoves, setSelectedMoves] = useState([])
    const moves = pokemon.raw.moves.map((move) => {
        return move.move.name
    })
    return (
        <div>
            {[0, 1, 2, 3].map((index) => {
                return (
                    <ModalMove
                        moves={moves}
                        selectedMoves={selectedMoves}
                        setSelectedMoves={setSelectedMoves}
                        key={pokemon.id + 'move' + index}
                    ></ModalMove>
                )
            })}
        </div>
    )
}

export default ModalMoveContainer
