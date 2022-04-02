var Personnage =
{
	// Initialise le personnage
	initPerso: function(nom, sante, force, argent, nb_cles)
	{
		this.nom = nom;
		this.sante = sante;
		this.force = force;
		this.argent = argent;
		this.nb_cles = nb_cles;
	},
	// Attaque un personnage cible
	attaquer: function(cible)
	{
		if(this.sante > 0)
		{
			var degats = this.force;
			console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de dégâts");
			cible.sante = cible.sante - degats;
			if(cible.sante > 0)
			{
				console.log(cible.nom + " a encore " + cible.sante + " points de vie");
			}
			else
			{
				cible.sante = 0;
				console.log(cible.nom + " est mort !");
			}
		}
		else
		{
			console.log(this.nom + " ne peut pas attaquer : il est mort...");
		}
	}
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function(nom, sante, force, argent, nb_cles)
{
	this.initPerso(nom, sante, force, argent, nb_cles);
	this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du personnage
Joueur.decrire = function()
{
	var description = this.nom + " a " + this.sante + " points de vie, " + 
		this.force + " en force, " + this.xp + " points d'expérience, " + this.argent + " pièce(s) d'or et " + this.nb_cles + " clé(s)";
	return description;
};

//Combat un adversaire
Joueur.combattre = function(adversaire)
{
	this.attaquer(adversaire);
	if(adversaire.sante === 0)
	{
		this.xp += adversaire.valeur;
		this.argent += adversaire.argent;
		this.nb_cles += adversaire.nb_cles;
		console.log(this.nom + " a tué " + adversaire.nom + " et gagne " + adversaire.valeur
			+ " points d'expérience, ainsi que " + this.argent + " pièce(s) d'or et " + this.nb_cles + " clé(s)");
	}
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function(nom, sante, force, race, valeur, argent, nb_cles)
{
	this.initPerso(nom, sante, force);
	this.race = race;
	this.valeur = valeur;
	this.argent = argent;
	this.nb_cles = nb_cles;
};

// On crée les personnages, ce sont les objets des différentes classes
var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25, 10, 1);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30, 10, 1);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10, 10, 1);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());