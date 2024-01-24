export class Enemy {
    constructor(name, HP, power, buffTokens, frostTokens, shield, burnTokens, maxHP){
        this.name = name;
        this.HP = HP;
        this.power = power;
        this.buffTokens = buffTokens;
        this.frostTokens = frostTokens;
        this.shield = shield;
        this.burnTokens = burnTokens;
        this.maxHP = maxHP;
    }

    ifDead(){
        if(this.HP <= 0){
            return true;
        } else {
            return false;
        }
    }

    addBurnTokens(tokenNum, maxDamage){
        this.burnTokens[0] += tokenNum;
        this.burnTokens[1] += maxDamage;
    }

    dealWithLifeGain(lifeGain){
        this.HP += lifeGain;
        if(this.HP > this.maxHP){
            this.HP = this.maxHP;
        }
    }

    addEffects(effects){
        this.buffTokens += effects["buffTokens"];
        this.shield += effects["shield"];
        this.frostTokens += effects["enemyFrost"];
        this.addBurnTokens(effects["burnTokens"][0], effects["burnTokens"][1]);
    }

    dealWithLifeLoss(damage){
        for(let _ = 0; _ < this.burnTokens[0]; _++){
            this.HP -= this.burnTokens[1];
        }
        this.burnTokens = [0, 0];

        if(this.shield > 0){
            this.shield -= damage;
            if(this.shield < 0){
                this.HP += this.shield;
                this.shield = 0;
            }
        } else {
            this.HP -= damage;
        }
    }

    giveEffectsAndDamage(card, player){
        player.addAllEffects(card.dealWithEffects());
        player.dealWithLifeLoss(this.computeDamageOutput());
    }

    computeDamageOutput(){
        let damage = this.power + this.buffTokens-this.frostTokens;
        return damage;
    }

    whoAmI() {
        return "Enemy";
    }
}