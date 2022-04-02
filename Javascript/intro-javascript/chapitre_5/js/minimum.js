function minimum(x, y)
{
	return Math.min(x, y);
}

var nb1 = Number(prompt("Quel est votre premier nombre ?"));
var nb2 = Number(prompt("Quel est votre premier nombre ?"));

console.log("Le minimum de ces deux nombres est " + minimum(nb1,nb2));