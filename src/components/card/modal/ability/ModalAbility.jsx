import React, { useEffect, useRef, useState } from 'react'
import * as Pokedex from 'pokeapi-js-wrapper'
import {
    usePokemonsDispatch,
    usePokemons,
} from '../../../context/PokemonContext'

function ModalAbility({ pokemon_id }) {
    const selectRef = useRef(null)
    const pokedex = new Pokedex.Pokedex()
    const pokemonsDispatch = usePokemonsDispatch()
    const pokemonsContext = usePokemons()
    const [ability, setAbility] = useState(null)
    const [abilityList, setAbilityList] = useState([])

    // TODO: fare un custom hook useFetch seguendo questo: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    // TODO: fixare tutto, con loading spinner e gestione abilities
    useEffect(() => {
        const pokemon = pokemonsContext.filter((p) => p.id === pokemon_id)[0]
        if (pokemon.ability === null) {
            setAbilityList(
                '',
                ...pokemon.raw.abilities.map((a) => a.ability.name)
            )
        } else {
            setAbility(pokemon.ability)
            setAbilityList(pokemon.raw.abilities.map((a) => a.ability.name))
        }
        /* if (abilityName !== null) {
            fetchAbility()
            pokemonsDispatch({
                type: 'setAbility',
                pokemon_id: pokemon_id,
                ability: abilityName,
            })
        } */
    }, [])

    async function fetchAbility() {
        const result = await pokedex.getAbilityByName(abilityName)
        let en_entry = result.effect_entries.filter(
            (entry) => entry.language.name == 'en'
        )
        setAbilityDesc(en_entry[0].short_effect)
    }

    function getAbilityDescription() {
        if (ability !== null) {
            let en_entry = result.effect_entries.filter(
                (entry) => entry.language.name == 'en'
            )
            return en_entry[0].short_effect
        }
    }

    /* function abilityList() {
        if (current_ability !== null) {
            return abilities
        } else {
            return ['', ...abilities]
        }
    } */

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
                {getAbilityDescription()}
            </p>
        </div>
    )
}

export default ModalAbility
