var films = [];

function filmentier()
{
	films.push(prompt("Donner le nom du film"));
	films.push(prompt("Donner l'année de sortie"));
	films.push(prompt("Donner le nom du réalisateur"));	
}

function affichefilm()
{

}

for(i=0; i<3; i++)
{
filmentier();
}

for(i=0; i<3; i++)
{
	console.log(films[3*i] + " (" + films[3*i+1] + ", " + films[3*i+2] + ")");
}
