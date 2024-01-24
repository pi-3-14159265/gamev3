import { randNum } from './util.js';

export class SudoCard {
    constructor(effectLevel){
        this.effectLevel = effectLevel;
    }

    dealWithEffects() {
        let shield = randNum(0, this.effectLevel);
        let frostTokensToEnemy = randNum(0, this.effectLevel);
        let buffTokens = randNum(0, this.effectLevel);
        let burn = [randNum(0, this.effectLevel), this.effectLevel - 2];
        let frostTokensToYou = randNum(0, this.effectLevel);

        return {
            "shield": shield,
            "enemyFrost": frostTokensToEnemy,
            "buffTokens": buffTokens,
            "burnTokens": burn,
            "myFrost": frostTokensToYou
        };
    }

    whoAmI() {
        return "SudoCard";
    }
}