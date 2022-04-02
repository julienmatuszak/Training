var nombre_heures = Number(prompt("Entrez les heures : "));
var nombre_minutes = Number(prompt("Entrez les minutes : "));
var nombre_secondes = Number(prompt("Entrez les secondes : "));


// si la valeur rentrée dépasse la limite

if (String(nombre_heures) === 'NaN' || String(nombre_minutes) === 'NaN' || String(nombre_secondes) === 'NaN')
{
	console.log("Il y a une erreur ! Merci de recommencer.");
}


// cas particulier, si dans une seconde il est minuit

else if(nombre_heures == 23 && nombre_minutes == 59 && nombre_secondes == 59)
{
	nombre_heures = 0;
	nombre_minutes = 0;
	nombre_secondes = 0;
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}


// autres cas particuliers

else if(nombre_secondes == 59)
{
	if(nombre_minutes == 59)
	{
		nombre_secondes = 0;
		nombre_minutes = 0;
		nombre_heures ++;
	}
	else
	{
		nombre_secondes = 0;
		nombre_minutes ++;
	}
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}

else if(nombre_minutes == 59)
{
	nombre_heures ++;
	nombre_minutes = 0;
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}


// cas général

else if(nombre_heures >0 && nombre_heures <23) 
{
	nombre_secondes ++;
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}

else if(nombre_minutes >0 && nombre_minutes <59) 
{
	nombre_secondes ++;
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}

else if(nombre_secondes >0 && nombre_secondes <59) 
{
	nombre_secondes ++;
	console.log("Dans une seconde, il sera " + nombre_heures + "h" + nombre_minutes + "m" + nombre_secondes + "s.");
}


// sinon on annonce le message d'erreur

else
{
	console.log("Vous avez indiqué une valeur trop grande ou négative ! Recommencez.");
}