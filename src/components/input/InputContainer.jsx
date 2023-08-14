import React from 'react'
import InputShowdown from './InputShowdown.jsx'
import InputSingle from './InputSingle.jsx'

function InputContainer() {
    return (
        <div className="flex w-full">
            <InputShowdown></InputShowdown>
            <div className="divider divider-horizontal"></div>
            <InputSingle></InputSingle>
        </div>
    )
}

export default InputContainer
