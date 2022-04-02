var Film =
{
	// Initialise le fom
	init: function(titre, annee, directeur)
	{
		this.titre = titre;
		this.annee = annee;
		this.directeur = directeur;
	},
	// Renvoie la description du film
	decrire: function()
	{
		var description = this.titre + " (" + this.annee + ", " + this.directeur + ")";
		return description;
	}
};

var film1 = Object.create(Film);
film1.init(prompt("Entrez le titre du film"), prompt("Entrez la date de sortie"), prompt("Entrez le directeur"));

var film2 = Object.create(Film);
film2.init(prompt("Entrez le titre du film"), prompt("Entrez la date de sortie"), prompt("Entrez le directeur"));

var film3 = Object.create(Film);
film3.init(prompt("Entrez le titre du film"), prompt("Entrez la date de sortie"), prompt("Entrez le directeur"));

console.log(film1.decrire());
console.log(film2.decrire());
console.log(film3.decrire());