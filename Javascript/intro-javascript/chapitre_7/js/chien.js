var Chien =
{
	// Initialise le chien
	initPerso: function(nom, race, taille)
	{
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	// Fait aboyer le chien
	aboyer: function()
	{
		return "Grrr ! Grrr !";
	}
};

Chien.init = function(nom, race, taille)
{
	this.initPerso(nom, race, taille);
};

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + 
	" cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());