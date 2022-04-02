var nombre1 = Number(prompt("Quel est votre premier nombre SVP ? "));
var nombre2 = Number(prompt("Quel est votre deuxième nombre SVP ? "));

if (nombre1 === nombre2)
{
	console.log("Ces 2 nombres sont égaux !");
}
else if(nombre1 >= nombre2)
{
	console.log("Le premier nombre est supérieur au deuxième !");
}
else if (nombre1 <= nombre2)
{
	console.log("Le deuxième nombre est supérieur au premier !");
}
else
{
	console.log("Un(Deux) nombre(s) est(sont) mal rentré(s). Veuillez recommencer SVP.");
}