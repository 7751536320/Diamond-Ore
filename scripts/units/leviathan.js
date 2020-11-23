const SpoNavT5 = extendContent(UnitType, "leviathan", {
	update(){
		this.heal(2.7);
	},
});
SpoNavT5.constructor = () => extend(UnitWaterMove, {
	update(){
		this.super$update();
		this.heal(2.7);
	},
});
SpoNavT5.abilities.add(new UnitSpawnAbility(UnitTypes.risso, 60 * 45, 0, -32));
SpoNavT5.ammoType = AmmoTypes.powerHigh;

var upgrade = new Seq([Vars.content.getByName(ContentType.unit, "diamond-ore-charybdis"), Vars.content.getByName(ContentType.unit, "diamond-ore-leviathan")]);
Blocks.tetrativeReconstructor.upgrades.add(upgrade.toArray(UnitType));
