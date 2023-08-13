import React, { useRef } from 'react'

function Modal_move({ moves, setSelected, setSelectedMoves }) {
    const selectRef = useRef(null)
    const [move, setMove] = useState()

    useEffect(() => {}, [move])

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                onChange={() => setMove(selectRef.current.value)}
            >
                {['', ...moves].map((moveName) => {
                    return <option key={moveName}>{moveName}</option>
                })}
            </select>
            <div>Move type: {move}</div>
        </div>
    )
}

export default Modal_move
