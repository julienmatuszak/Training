var mousquetaires = ["Athos", "Portos", "Aramis"];
console.log("Voici les trois mousquetaires !");
for(var i=0; i<mousquetaires.length; i++)
{
	console.log(mousquetaires[i]);
}
mousquetaires.push("D'Artagnan");
console.log("A présent, ils sont quatre !");
mousquetaires.forEach(function(mousquetaires)
{
	console.log(mousquetaires);
});