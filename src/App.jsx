import { useState } from 'react'
import './App.css'
import Input_container from './components/input/Input_container.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
    const [pokemons, setPokemons] = useState()

    return (
        <QueryClientProvider client={queryClient}>
            <button className="btn">Useless button</button>
            <Input_container></Input_container>
        </QueryClientProvider>
    )
}

export default App
