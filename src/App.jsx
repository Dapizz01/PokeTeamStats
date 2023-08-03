import { useState } from 'react'
import './App.css'
import Input_container from './components/input/Input_container.jsx'
import Compact_card from './components/card/Compact_card.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    const [pokemons, setPokemons] = useState([])

    const delete_card = (id) => {
        setPokemons(pokemons.filter((pokemon) => id !== pokemon.id))
    }

    return (
        <QueryClientProvider client={queryClient}>
            <h1 className="text-2xl font-bold">Title, idk</h1>
            <Input_container
                setPokemons={setPokemons}
                pokemons={pokemons}
            ></Input_container>
            <div>How many pokemons: {pokemons.length}</div>
            <div>
                {pokemons.map((pokemon) => {
                    return (
                        <Compact_card
                            pokemon={pokemon}
                            delete_card={delete_card}
                            key={pokemon.id}
                        ></Compact_card>
                    )
                })}
            </div>
        </QueryClientProvider>
    )
}

export default App
