import React, { useState } from 'react'
import ModalMove from './ModalMove'

function ModalMoveContainer({ current_moves, moves, pokemon_id }) {
    // const [selectedMoves, setSelectedMoves] = useState([])
    const moves_names = moves.map((move) => {
        return move.move.name
    })
    return (
        <div>
            {[0, 1, 2, 3].map((index) => {
                return (
                    <ModalMove
                        current_move={current_moves[index]}
                        moves={moves_names}
                        pokemon_id={pokemon_id}
                        index={index}
                        // selectedMoves={selectedMoves}
                        // setSelectedMoves={setSelectedMoves}
                        key={pokemon_id + 'move' + index}
                    ></ModalMove>
                )
            })}
        </div>
    )
}

export default ModalMoveContainer
