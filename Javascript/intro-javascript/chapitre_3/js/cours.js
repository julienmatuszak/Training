var nombre = Number(prompt("Entrez un nombre : "));
if (nombre > 0)
{
	console.log(nombre + " est positif.")
}

if(!(nombre > 100))
{
	console.log(nombre + " est inférieur ou égal à 100.");
}

console.log(!true);
console.log(!false);

var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo)
{
case "soleil":
	console.log("Sortez en T-shirt.");
break;
case "pluie":
	console.log("Sortez en blouson.");
break;
case "neige":
	console.log("Restez au chaud à la maison.");
break;
default:
	console.log("Je n'ai pas compris !");
}