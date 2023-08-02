import React from 'react'
import Input_showdown from './Input_showdown.jsx'
import Input_single from './Input_single.jsx'

function Input_container(props) {
    return (
        <div className="flex w-full">
            <Input_showdown></Input_showdown>
            <div className="divider divider-horizontal"></div>
            <Input_single></Input_single>
        </div>
    )
}

export default Input_container
