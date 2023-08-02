import React from 'react'
import { useQuery } from '@tanstack/react-query'

function Input_single(props) {
    const { data, status } = useQuery(['fetch_all'], async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
        return res.json()
    })

    return (
        <div className="flex-auto">
            {status === 'error' && <p>Error fetching data!</p>}
            {status === 'loading' && (
                <span className="loading loading-spinner"></span>
            )}
            {status === 'success' && (
                <select className="select select-bordered w-full">
                    {data.results.map((entry) => {
                        return <option key={entry.name}>{entry.name}</option>
                    })}
                </select>
            )}
        </div>
    )
}

export default Input_single
