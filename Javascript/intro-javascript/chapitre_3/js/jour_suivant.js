var jour = prompt("Quel jour sommes-nous aujourd'hui ? ");

switch (jour)
{
case "lundi", "Lundi":
	console.log("Demain sera mardi.");
break;
case "mardi", "Mardi":
	console.log("Demain sera mercredi.");
break;
case "mercredi", "Mercredi":
	console.log("Demain sera jeudi.");
break;
case "jeudi", "Jeudi":
	console.log("Demain sera vendredi.");
break;
case "vendredi" || "Vendredi":
	console.log("Demain sera samedi.");
break;
case "samedi" || "Samedi":
	console.log("Demain sera dimanche.");
break;
case "dimanche" || "Dimanche":
	console.log("Demain sera lundi.");
break;
default:
	console.log("Je n'ai pas compris ! Merci de recommencer.");
}