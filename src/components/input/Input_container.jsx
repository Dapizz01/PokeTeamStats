import React from 'react'
import Input_showdown from './Input_showdown.jsx'
import Input_single from './Input_single.jsx'

function Input_container({ pokemons, setPokemons }) {
    return (
        <div className="flex w-full">
            <Input_showdown
                setPokemons={setPokemons}
                pokemons={pokemons}
            ></Input_showdown>
            <div className="divider divider-horizontal"></div>
            <Input_single
                setPokemons={setPokemons}
                pokemons={pokemons}
            ></Input_single>
        </div>
    )
}

export default Input_container
