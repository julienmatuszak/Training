function direBonjour(prenom, nom)
{
	var message = "Bonjour, " + prenom + " " + nom + " !";
	return message;
}

prenom = prompt("Quel est votre prénom ?");
nom = prompt("Quel est votre nom ?");
console.log(direBonjour(prenom, nom));