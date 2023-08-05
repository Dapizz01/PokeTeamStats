import React, { useRef, useState } from 'react'
import Pokemon_ability from '../../../templates/pokemon_ability'
import * as Pokedex from 'pokeapi-js-wrapper'

function Modal_ability({ pokemon }) {
    const { current_ability, setCurrentAbility } = useState()
    const selectRef = useRef(null)
    const pokedex = new Pokedex.Pokedex()

    const update_ability = async (ability_name) => {
        let ability = await pokedex.getAbilityByName(ability_name)
        ability = new Pokemon_ability(ability)
        setCurrentAbility(ability)
    }

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                onChange={() => update_ability(selectRef.current.value)}
            >
                {pokemon.raw.abilities.map((a) => {
                    return (
                        <option key={a.ability.name}>{a.ability.name}</option>
                    )
                })}
            </select>
            {current_ability === undefined ? (
                <div>No ability selected</div>
            ) : (
                <div>
                    Ability name: {current_ability.name}, ability description:
                    {current_ability.description}
                </div>
            )}
        </div>
    )
}

export default Modal_ability
