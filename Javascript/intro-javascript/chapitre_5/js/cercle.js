function perimetre_cercle(r)
{
	pi = 3.14;
	return pi * 2 * r;
}

function aire_cercle(r)
{
	pi = 3.14;
	return pi * r * r;
}

rayon = Number(prompt("Indiquer le rayon de votre cercle"));
console.log("Le périmètre du cercle est de " + perimetre_cercle(rayon));
console.log("L'aire du cercle est de " + aire_cercle(rayon));