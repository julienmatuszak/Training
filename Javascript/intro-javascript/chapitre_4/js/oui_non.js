var texte = prompt("Veuillez rentrer un texte : ");

while(texte != "oui" && texte != "non")
{
	console.log("Vous avez gagné au jeu du ni oui ni non. Bravo!");
	texte = prompt("Veuillez rentrer un texte : ");
}

console.log("Hélas! Vous avez perdu au jeu du ni oui ni non.");