/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var essai = Number(prompt("Proposez un nombre entier entre 1 et 100 SVP : "));

if (essai == solution)
{
	console.log("Bravo! Vous avez trouvé du premier coup!")
}

else
{
	var nb_essais=1;

	while((essai != solution) && nb_essais<=6)
	{	
		if (essai > solution)
		{
			console.log(essai + " est trop grand");
		}
		else if(essai < solution)
		{
			console.log(essai + " est trop petit");
		}
		nb_essais ++;
		essai = Number(prompt("Réessayez"));
	}

	if (nb_essais<=6)
	{
		console.log("Bravo ! La solution était " + String(solution));
		console.log("Vous avez trouvé en " + String(nb_essais) + " essais.")
	}
	else
	{
		console.log("Désolé, vous n'avez pas trouvé la solution au bout de 6 essais. Vous êtes disqualifié :(")
	}
}

console.log("Merci d'avoir joué !");

