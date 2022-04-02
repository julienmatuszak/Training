var Chien =
{
	// Initialise le film
	init: function(nom, race, taille)
	{
		this.nom = nom;
		this.race = race;
		this.taille = taille;
	},
	// Renvoie l'aboiement du chien
	aboyer: function()
	{
		var aboiement = "Whoua ! Whoua !";
		if(this.taille < 25)
		{
			aboiement = "Kaii ! Kaii !";
		}
		else if(this.taille > 60)
		{
			aboiement = "Grrr ! Grrr !";
		}
		return aboiement;
	},
	decrire: function()
	{
		var description = this.nom + " est un " + this.race + " mesurant " + this.taille + " cm.";
		return description;
	}
};

var chien1 = Object.create(Chien);
chien1.init("Crokdur", "mâtin de Naples", 75);

var chien2 = Object.create(Chien);
chien2.init("Choupette", "bichon", 22);

var chien3 = Object.create(Chien);
chien3.init("Médor", "labrador", 58);

var chiens = [];
chiens.push(chien1);
chiens.push(chien2);
chiens.push(chien3);

console.log("Le chenil héberge " + chiens.length + " chien(s).");

for(i=0; i<chiens.length; i++)
{
	console.log(chiens[i].decrire() + " Il aboie : " + chiens[i].aboyer());
}
/*
chiens.forEach(function (film)
{
	console.log(chiens.decrire() + " Il aboie " + chiens.aboyer());
});
*/