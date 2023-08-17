export default class Pokemon {
    /**
     * Default constructor
     * @param {*} raw -> What returns PokeAPI
     * @param {*} name -> User name of the pokemon
     * @param {*} ability -> Ability chosen of the pokemon, contains the whole PokeAPI ability json
     * @param {*} item -> The item used, contains the PokeAPI item json
     * @param {*} moves -> The 4 moves chosen, for each contains the whole PokeAPI move json
     */
    constructor(raw, name, ability, item, moves) {
        this.id = self.crypto.randomUUID()
        this.raw = raw
        this.name = name
        this.ability = ability
        this.item = item
        this.moves = moves
    }
}
