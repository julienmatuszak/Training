/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

// On définit les différentes variables
var Contact =
{
	// On initialise le contact
	initContact: function(nom, prenom)
	{
		this.nom = nom;
		this.prenom = prenom;
	},
	// La fonction pour décrire l'état de la personne citée dans la liste
	//(on peut imaginer demander seulement certaines personnes)
	citer: function()
	{
		var citation = "Nom : " + this.nom + ", prénom : " + this.prenom;
		return citation;
	}
}

// Les deux premiers contacts déjà enregistrés
var contact1 = Object.create(Contact);
contact1.initContact("Lévisse", "Carole");
var contact2 = Object.create(Contact);
contact2.initContact("Nelsonne", "Mélodie");

// On crée un tableau d'objets car on va créer une base de données (il faudra y ajouter les futurs contacts)
var contacts=[contact1, contact2];

// On passe au programme en lui-même
console.log("Bienvenue dans le gestionnaire de contacts ! \n1 : Lister les contacts\n2 : Ajouter un contact\nQ : Quitter");

var choix = prompt("Choisissez une option : ");

while ((choix === "1") || (choix === "2"))
{
		if(choix === "1")
		{
			// On fait une boucle car on chercher à lister tous les contacts
			console.log("Voici la liste de vos contacts : ")
			for (var i=0; i<contacts.length; i++)
				{
					console.log(contacts[i].citer());
				}

			// On propose un nouveau choix
			console.log("1 : Lister les contacts\n2 : Ajouter un contact\nQ : Quitter");
			var choix = prompt("Choisissez une option : ");
		}			

		else if (choix === "2")
		{
			// On crée un nouveau contact que l'on met dans le tableau
			contacts.push(Object(Contact));
			// Ce contact se trouve donc au dernier rang du tableau,
			// on peut donc le retrouver en indiquant son rang
			// on peut aussi rentrer directement les propriétés de cet objet en utilisant la commande prompt
			contacts[contacts.length-1].initContact(prompt("Entrez le nom du nouveau contact : "), prompt("Entrez le prénom du nouveau contact : "));

			//On confirme et on propose un nouveau choix
			console.log("Le nouveau contact a été ajouté")
			console.log("1 : Lister les contacts\n2 : Ajouter un contact\nQ : Quitter");
			var choix = prompt("Choisissez une option : ");
		}
}

if(choix === "Q")
{
	console.log("Au revoir !");
}

else
{
	console.log("Choix invalide. Veuillez recommencer SVP.");
}