export default class Pokemon {
    constructor(raw, name, ability, item, moves) {
        this.id = self.crypto.randomUUID()
        this.raw = raw
        this.name = name
        if (ability === null) {
            this.ability = raw.abilities[0].ability.name
        } else {
            this.ability = ability
        }
        this.item = item
        this.moves = moves
    }
}
