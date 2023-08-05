export default class Pokemon_ability {
    constructor(raw) {
        this.name = raw.name
        this.description = raw.effect_entries[0].short_effect
    }
}
