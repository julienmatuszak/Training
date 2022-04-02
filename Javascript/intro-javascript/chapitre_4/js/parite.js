nombre_choisi = Number(prompt("Choisissez un nombre entier : "));

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
	for(var i=nombre_choisi; i<=nombre_choisi+9; i++)
	{
		if (i%2 === 0)
		{
			console.log(i + " est pair");	
		}

		else
		{
			console.log(i + " est impair");	
		}
	}
}