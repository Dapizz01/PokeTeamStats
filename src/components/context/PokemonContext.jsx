import { createContext, useContext, useReducer } from 'react'

const PokemonsContext = createContext(null)
const PokemonsDispatchContext = createContext(null)

export function usePokemons() {
    return useContext(PokemonsContext)
}

export function usePokemonsDispatch() {
    return useContext(PokemonsDispatchContext)
}

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
                    pokemon.move[action.move_index] = action.move
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
