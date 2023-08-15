import { useRef, useState } from 'react'
import './App.css'
import InputContainer from './components/input/InputContainer.jsx'
import CompactCard from './components/card/CompactCard.jsx'
import ModalCard from './components/card/modal/ModalCard.jsx'
import { PokemonsProvider } from './components/context/PokemonContext'
import CompactCardContainer from './components/card/CompactCardContainer'

function App() {
    // TODO: Mettere ASSOLUTAMENTE context e reducer
    /*const [focused, setFocused] = useState()
    const modal = useRef()

    const open_modal = (pokemon) => {
        setFocused(pokemon)
        modal.current.showModal()
    }*/

    return (
        <PokemonsProvider>
            <h1 className="text-2xl font-bold">Title, idk</h1>
            <InputContainer></InputContainer>
            <CompactCardContainer></CompactCardContainer>
        </PokemonsProvider>
    )
}

export default App
