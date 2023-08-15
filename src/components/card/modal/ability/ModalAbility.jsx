import React, { useEffect, useRef, useState } from 'react'
import * as Pokedex from 'pokeapi-js-wrapper'
import { usePokemonsDispatch } from '../../../context/PokemonContext'

function ModalAbility({ current_ability, abilities, pokemon_id }) {
    const selectRef = useRef(null)
    const pokedex = new Pokedex.Pokedex()
    const [abilityName, setAbilityName] = useState(current_ability)
    const [abilityDesc, setAbilityDesc] = useState('')
    const pokemonDispatch = usePokemonsDispatch()

    // TODO: fare un custom hook useFetch seguendo questo: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    useEffect(() => {
        if (abilityName !== null) {
            fetchAbility()
            pokemonDispatch({
                type: 'setAbility',
                pokemon_id: pokemon_id,
                ability: abilityName,
            })
        }
    }, [abilityName])

    async function fetchAbility() {
        const result = await pokedex.getAbilityByName(abilityName)
        let en_entry = result.effect_entries.filter(
            (entry) => entry.language.name == 'en'
        )
        setAbilityDesc(en_entry[0].short_effect)
    }

    function abilityList() {
        if (current_ability !== null) {
            return abilities
        } else {
            return ['', ...abilities]
        }
    }

    return (
        <div>
            <select
                className="select select-bordered"
                ref={selectRef}
                defaultValue={current_ability}
                onChange={() => setAbilityName(selectRef.current.value)}
            >
                {abilityList().map((a) => {
                    if (a === '') {
                        return <option key={a} hidden></option>
                    } else {
                        return (
                            <option key={a.ability.name}>
                                {a.ability.name}
                            </option>
                        )
                    }
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

export default ModalAbility
