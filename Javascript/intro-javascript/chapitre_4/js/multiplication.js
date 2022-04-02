nombre_choisi = Number(prompt("Veuillez saisir un nombre entier entre 2 et 9 (inclus) : "));

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
    while(nombre_choisi > 9 || nombre_choisi < 2)
	{
		console.log("Votre nombre est strictement inférieur à 2 ou strictement supérieur à 9. Veuillez recommencer.");
		nombre_choisi = Number(prompt("Veuillez saisir un nombre entier entre 2 et 9 (inclus) : "));
	}
	console.log("Voici la table de multiplication de", String(nombre_choisi));
	for(i=1; i<=10; i++)
	{
		console.log(String(nombre_choisi), "x", String(i), "=", String(Number(nombre_choisi*i)));
	}
}