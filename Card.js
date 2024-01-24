export class Card {
    constructor(name, description, effects, type, manaCost, img){
        this.name = name;
        this.description = description;
        this.effects = effects;
        this.type = type;
        this.manaCost = manaCost;
        this.img = img;
    }

    dealWithEffects() {
        let shield = this.effects["shield"] ? this.effects["shield"] : 0;
        let frostTokensToEnemy = this.effects["frostTokensToEnemy"] ? this.effects["frostTokensToEnemy"] : 0;
        let buffTokens = this.effects["buff"] ? this.effects["buff"] : 0;
        let damage = this.effects["damage"] ? this.effects["damage"] : 0;
        let burn = this.effects["burn"] ? [this.effects["burn"][0], this.effects["burn"][1]] : [0, 0];
        let gold = this.effects["gold"] ? this.effects["gold"] : 0;
        let frostTokensToYou = this.effects["frostTokensToYou"] ? this.effects["frostTokensToYou"] : 0;

        return {
            "shield": shield,
            "enemyFrost": frostTokensToEnemy,
            "buffTokens": buffTokens,
            "myDamage": damage,
            "burnTokens": burn,
            "costInGold": gold,
            "myFrost": frostTokensToYou
        };
    }

    checkIfPlayable(player){
        if(player.mana >= this.manaCost){
            return true;
        } else {
            return false;
        }
    }

    whoAmI() {
        return "Card";
    }

}