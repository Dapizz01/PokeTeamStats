import { createContext, useContext, useReducer } from 'react'

const PokemonsContext = createContext(null)
const PokemonsDispatchContext = createContext(null)

export function usePokemons() {
    return useContext(PokemonsContext)
}

export function usePokemonsDispatch() {
    return useContext(PokemonsDispatchContext)
}

/* export function getPokemonByID(pokemon_id) {
    const pokemonsContext = usePokemons()
    const result = pokemonsContext.filter(
        (pokemon) => pokemon.id === pokemon_id
    )
    if (result.length == 0) {
        throw Error(
            'Pokemon with id ' + pokemon_id + ' not found in the context'
        )
    } else return result[0]
} */

function pokemonsReducer(pokemons, action) {
    switch (action.type) {
        case 'addPokemon':
            return [...pokemons, action.pokemon]
        case 'deletePokemon':
            return pokemons.filter((pokemon) => pokemon.id !== action.id)
        case 'setAbility':
            return pokemons.map((pokemon) => {
                if (pokemon.id === action.pokemon_id) {
                    pokemon.ability = action.ability
                    return pokemon
                } else {
                    return pokemon
                }
            })
        case 'setMove':
            return pokemons.map((pokemon) => {
                if (pokemon.id === action.pokemon_id) {
                    pokemon.moves[action.moveIndex] = action.move
                    return pokemon
                } else {
                    return pokemon
                }
            })
        default:
            throw Error('Reducer received an unknown action.')
    }
}

export function PokemonsProvider({ children }) {
    const [pokemons, dispatch] = useReducer(pokemonsReducer, [])

    return (
        <PokemonsContext.Provider value={pokemons}>
            <PokemonsDispatchContext.Provider value={dispatch}>
                {children}
            </PokemonsDispatchContext.Provider>
        </PokemonsContext.Provider>
    )
}
