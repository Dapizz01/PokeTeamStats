export default class Pokemon{
    constructor(raw, name, ability, item, moves){
        this.id = self.crypto.randomUUID()
        this.raw = raw
        this.name = name
        this.ability = ability
        this.item = item
        this.moves = moves
    }
}