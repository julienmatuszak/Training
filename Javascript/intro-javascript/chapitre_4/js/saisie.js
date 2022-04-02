nombre_choisi = Number(prompt("Veuillez saisir un nombre entier : "));

if(String(nombre_choisi) === 'NaN')
{
	console.log("Vous n'avez pas rentré un nombre valide. Recommencez.")
}

else if(parseInt(nombre_choisi) != nombre_choisi)
{
	console.log("Vous n'avez pas rentré un nombre entier. Recommencez.")
}

else if (nombre_choisi < 0)
{
	console.log("Vous avez rentré un nombre négatif. Recommencez.")
}

else
{
    while(nombre_choisi > 100 || nombre_choisi < 50)
	{
		console.log("Votre nombre est inférieur à 50 ou supérieur à 100. Veuillez recommencer.");
		nombre_choisi = Number(prompt("Veuillez saisir un nombre entier : "));
	}
	console.log("Bravo, votre nombre est compris entre 50 et 100 (inclus)!");
}