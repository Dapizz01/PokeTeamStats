import React, { useEffect, useRef, useState } from 'react'
import * as Pokedex from 'pokeapi-js-wrapper'

function Modal_ability({ pokemon }) {
    const selectRef = useRef(null)
    const pokedex = new Pokedex.Pokedex()
    const [abilityName, setAbilityName] = useState(pokemon.ability)
    const [abilityDesc, setAbilityDesc] = useState('')

    // TODO: fare un custom hook useFetch seguendo questo: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    useEffect(() => {
        async function fetchAbility() {
            const result = await pokedex.getAbilityByName(abilityName)
            setAbilityDesc(result.effect_entries[0].short_effect)
        }
        fetchAbility()
    }, [abilityName])

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                onChange={() => setAbilityName(selectRef.current.value)}
            >
                {pokemon.raw.abilities.map((a) => {
                    return (
                        <option key={a.ability.name}>{a.ability.name}</option>
                    )
                })}
            </select>
            <p>
                Ability name: {abilityName}
                <br />
                Ability description:
                {abilityDesc}
            </p>
        </div>
    )
}

export default Modal_ability
