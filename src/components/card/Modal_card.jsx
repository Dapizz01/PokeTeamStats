import React from 'react'

function Modal_card({ pokemon }) {
    return (
        <>
            <form method="dialog" className="modal-box">
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure>
                        <img
                            src={
                                pokemon.raw.sprites.other.dream_world
                                    .front_default
                            }
                            className="w-1/2"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{pokemon.raw.name}</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </>
        /*<form method="dialog" className="modal-box">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
            </button>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={
                            pokemon.raw.sprites.other.dream_world.front_default
                        }
                        className="w-1/2"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{pokemon.raw.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </form-->*/
    )
}

export default Modal_card
