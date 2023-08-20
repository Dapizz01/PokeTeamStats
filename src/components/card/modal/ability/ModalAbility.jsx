import React, { Suspense, useEffect, useRef, useState } from 'react'
import * as Pokedex from 'pokeapi-js-wrapper'
import {
    usePokemonsDispatch,
    usePokemons,
} from '../../../context/PokemonContext'
import Loading from '../../../Loading'
import Select from 'react-select'

function ModalAbility({ pokemon_id }) {
    const pokemonsContext = usePokemons()
    const [abilityDetails, setAbilityDetails] = useState(null)
    const [abilityList, setAbilityList] = useState([{ value: '', label: '' }])

    // TODO: fare un custom hook useFetch seguendo questo: https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
    // TODO: fixare tutto, con loading spinner e gestione abilities
    useEffect(() => {
        const pokemon = pokemonsContext.filter((p) => p.id === pokemon_id)[0]
        const abilities = pokemon.raw.abilities.map((a) => ({
            value: a.ability.name,
            label: a.ability.name,
        }))
        if (pokemon.ability === null) {
            setAbilityList([...abilities])
        } else {
            setAbilityList(abilities)
            setAbilityDetails({
                type: 'all',
                ability: pokemon.ability,
            })
        }
    }, [])

    function updateAbility(option) {
        setAbilityDetails({
            type: 'name',
            name: option.label,
        })
    }

    return (
        <div>
            <Select
                options={abilityList}
                onChange={updateAbility}
                value={
                    abilityDetails === null
                        ? { value: '', label: '' }
                        : abilityDetails.type === 'name'
                        ? {
                              value: abilityDetails.name,
                              label: abilityDetails.name,
                          }
                        : {
                              value: abilityDetails.ability.name,
                              label: abilityDetails.ability.name,
                          }
                }
            ></Select>
            <Suspense fallback={<Loading />}>
                <ModalAbilityDetails
                    pokemon_id={pokemon_id}
                    abilityDetails={abilityDetails}
                ></ModalAbilityDetails>
            </Suspense>
        </div>
    )
}

function ModalAbilityDetails({ pokemon_id, abilityDetails }) {
    const pokedex = new Pokedex.Pokedex()
    const pokemonsDispatch = usePokemonsDispatch()
    const [ability, setAbility] = useState(null)

    useEffect(() => {
        if (abilityDetails !== null) {
            if (abilityDetails.type == 'name') {
                fetchAbility(abilityDetails.name)
            } else {
                setAbility(abilityDetails.ability)
            }
        }
    }, [abilityDetails])

    async function fetchAbility(abilityName) {
        const result = await pokedex.getAbilityByName(abilityName)
        pokemonsDispatch({
            type: 'setAbility',
            pokemon_id: pokemon_id,
            ability: result,
        })
        setAbility(result)
    }

    function getAbilityDescription() {
        let en_entry = ability.effect_entries.filter(
            (entry) => entry.language.name == 'en'
        )
        return en_entry[0].short_effect
    }

    return (
        <>
            {ability === null ? (
                <div>No ability selected</div>
            ) : (
                <div>
                    Ability name: {ability.name}
                    <br />
                    Ability description: {getAbilityDescription()}
                </div>
            )}
        </>
    )
}

export default ModalAbility
