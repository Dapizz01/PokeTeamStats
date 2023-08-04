import { useRef, useState } from 'react'
import './App.css'
import Input_container from './components/input/Input_container.jsx'
import Compact_card from './components/card/Compact_card.jsx'
import Modal_card from './components/card/Modal_card.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    const [pokemons, setPokemons] = useState([])
    const [focused, setFocused] = useState()
    const modal = useRef()

    const delete_card = (id) => {
        setPokemons(pokemons.filter((pokemon) => id !== pokemon.id))
    }

    const open_modal = (pokemon) => {
        setFocused(pokemon)
        modal.current.showModal()
    }

    return (
        <QueryClientProvider client={queryClient}>
            <h1 className="text-2xl font-bold">Title, idk</h1>
            <Input_container
                setPokemons={setPokemons}
                pokemons={pokemons}
            ></Input_container>
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
