import { useRef, useState } from 'react'
import './App.css'
import Input_container from './components/input/Input_container.jsx'
import Compact_card from './components/card/Compact_card.jsx'
import Modal_card from './components/card/modal/Modal_card.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as Pokedex from 'pokeapi-js-wrapper'
import Pokemon from './templates/pokemon'

const queryClient = new QueryClient()

function App() {
    const [pokemons, setPokemons] = useState([])
    const [focused, setFocused] = useState()
    const modal = useRef()

    const pokedex = new Pokedex.Pokedex()

    const delete_card = (id) => {
        setPokemons(pokemons.filter((pokemon) => id !== pokemon.id))
    }

    const open_modal = (pokemon) => {
        setFocused(pokemon)
        modal.current.showModal()
    }

    const add_pokemon = async (pokemon) => {
        const res = await pokedex.getPokemon(pokemon)
        setPokemons([
            ...pokemons,
            new Pokemon(res, res.name, null, null, [null, null, null, null]),
        ])
    }

    const add_pokemons = async () => {}

    const update_pokemon = (updated_pokemon) => {
        const updated = pokemons.map((pokemon) => {
            if (pokemon.id === updated_pokemon.id) return updated_pokemon
            else return pokemon
        })
        setPokemons(updated)
    }

    return (
        <QueryClientProvider client={queryClient}>
            <h1 className="text-2xl font-bold">Title, idk</h1>
            <Input_container addPokemon={add_pokemon}></Input_container>
            <div>
                <div>How many pokemons: {pokemons.length}</div>
                <div className="flex flex-wrap">
                    {pokemons.map((pokemon) => {
                        return (
                            <Compact_card
                                pokemon={pokemon}
                                delete_card={delete_card}
                                focus={open_modal}
                                key={pokemon.id}
                            ></Compact_card>
                        )
                    })}
                </div>
            </div>
            <dialog className="modal" ref={modal}>
                {focused ? <Modal_card pokemon={focused}></Modal_card> : null}
            </dialog>
        </QueryClientProvider>
    )
}

export default App
