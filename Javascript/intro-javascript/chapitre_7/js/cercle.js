var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {};
pi = 3.14159;

cercle.perimetre = function()
{
	var perimetre = 2 * pi * r;
	return(perimetre);
}
cercle.aire = function()
{
	var aire = pi * r * r;
	return(aire);
}

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire())