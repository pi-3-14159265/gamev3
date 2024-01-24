import { shuffle } from "./util.js";

export class Player {
    constructor(name, mana, maxMana, frostTokens, HP, maxHP, shield, burnTokens, power, buffTokens, deck, hand, discard){
        this.name = name;
        this.mana = mana;
        this.maxMana = maxMana;
        this.frostTokens = frostTokens;
        this.HP = HP;
        this.maxHP = maxHP;
        this.shield = shield;
        this.burnTokens = burnTokens;
        this.power = power;
        this.buffTokens = buffTokens;
        this.deck = deck;
        this.hand = hand;
        this.discard = discard;
    }

    ifDead(){
        if(this.HP <= 0){
            return true;
        } else {
            return false;
        }
    }

    shuffleDeck(){
        this.deck = util.shuffle(this.deck);
    }

    onStartOfTurn(handSize=5){
        this.mana = this.maxMana;
        this.gethandOf(handSize, this.discard);
        this.zeroAllEffects();
    }

    addAllEffects(effects){
        this.buffTokens += effects["buffTokens"];
        this.shield += effects["shield"];
        this.frostTokens += effects["frostTokens"];
        this.addBurnTokens(effects["burnTokens"][0], effects["burnTokens"][1]);
    }

    zeroAllEffects(){
        this.buffTokens = 0;
        this.shield = 0;
        this.frostTokens = 0;
        this.burnTokens = [0,0];
    }

    addBurnTokens(tokenNumber, damage){
        this.burnTokens[0] += tokenNumber; // number 0 is the number of tokens, number 1 is the damage per token
        this.burnTokens[1] += damage;
    }

    dealWithLifeGain(life){
        this.HP += life;
        if(this.HP > this.maxHP){
            this.HP = this.maxHP;
        }
    }

    dealWithLifeLoss(life){
        for(let _ = 0; _ <this.burnTokens[0]; _++){
            this.HP -= this.burnTokens[1];
        }
        this.burnTokens = [0,0];

        if(this.shield > 0){
            this.shield -= life;
            if(this.shield < 0){
                this.HP += this.shield;
                this.shield = 0;
            }
        } else {
            this.HP -= life;
        }
    }

    computeDamageOutput(){
        let damage = this.power+this.buffTokens-this.frostTokens;
        return damage;
    }

    giveEffectsAndDamage(target, fromCard){
        target.addAllEffects(fromCard.dealWithEffects());
        target.dealWithLifeLoss(this.computeDamageOutput());
        let index = this.hand.indexOf(fromCard);
        this.discard.push(this.hand[index]);
        delete this.hand[index];
    }

    gethandOf(count){
        try{
            for(let _ = 0; _ < count; _++){
                this.hand.push(this.deck.pop());
            }
        } catch (IndexOutOfBoundsException){
            this.deck = this.discard;
            this.discard = [];
            this.shuffleDeck();
            this.gethandOf(count);
        }
    }

    whoAmI() {
        return "Player";
    }

}