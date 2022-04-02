var mois = prompt("Quel mois sommes-nous ? ");

switch (mois)
{
case "janvier":
case "Janvier":
case "mars":
case "Mars":
case "mai":
case "Mai":
case "juillet":
case "Juillet":
case "août":
case "Août":
case "aout":
case "Aout":
case "octobre":
case "Octobre":
case "décembre":
case "Décembre":
case "decembre":
case "Decembre":
	console.log("Ce mois-ci contient 31 jours.");
break;
case "février":
case "Février":
case "fevrier":
case "Fevrier":
	console.log("Ce mois-ci contient 28 jours (ou 29 jours si nous sommes dans une année bissextile).");
break;
case "avril":
case "Avril":
case "juin":
case "Juin":
case "septembre":
case "Septembre":
case "novembre":
case "Novembre":
	console.log("Ce mois-ci contient 30 jours.");
break;
default:
	console.log("Je n'ai pas compris votre requête ! Merci de recommencer.");
}