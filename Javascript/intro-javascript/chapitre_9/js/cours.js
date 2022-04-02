var Film =
{
	// Initialise le film
	init: function(titre, annee)
	{
		this.titre = titre;
		this.annee = annee;
	},
	// Renvoie la description du film
	decrire: function()
	{
		var description = this.titre + " (" + this.annee + ")";
		return description;
	}
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film)
{
	console.log(film.decrire());
});