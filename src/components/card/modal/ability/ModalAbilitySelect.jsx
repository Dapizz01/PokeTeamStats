import React from 'react'

function ModalAbilitySelect(props) {
    return (
        <select
            className="select select-bordered"
            ref={selectRef}
            defaultValue={current_ability}
            onChange={() => setAbilityName(selectRef.current.value)}
        >
            {abilityList().map((a) => {
                if (a === '') {
                    return <option key={a} hidden></option>
                } else {
                    return (
                        <option key={a.ability.name}>{a.ability.name}</option>
                    )
                }
            })}
        </select>
    )
}

export default ModalAbilitySelect
