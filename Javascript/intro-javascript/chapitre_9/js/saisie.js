mots = [];
mots.push(prompt("Veuillez entrer un mot"));

while(mots[mots.length-1] != "stop")
{
	mots.push(prompt("Veuillez entrer un mot"));
}

mots.forEach(function(mots)
{
	console.log(mots)
});