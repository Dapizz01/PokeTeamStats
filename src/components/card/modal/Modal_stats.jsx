import React from 'react'

function Modal_stats({ stats }) {
    const max_stats = {
        hp: 255,
        attack: 180,
        defense: 230,
        'special-attack': 180,
        'special-defense': 230,
        speed: 180,
    }

    return (
        <>
            {stats.map((stat) => {
                return (
                    <div className="w-full" key={stat.stat.name}>
                        <span>{stat.stat.name}</span>
                        <progress
                            className="progress"
                            value={stat.base_stat}
                            max={max_stats[stat.stat.name]}
                        >
                            {stat.base_stat}
                        </progress>
                    </div>
                )
            })}
        </>
    )
}

export default Modal_stats
