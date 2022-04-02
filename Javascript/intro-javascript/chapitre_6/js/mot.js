function compterNbVoyelles(x)
{
	var j=0;
	for(var i=0; i<x.length; i++)
	{
		if (x.charAt(i) === "a" || x.charAt(i) === "A" || x.charAt(i) === "e" || x.charAt(i) === "E"
		|| x.charAt(i) === "i" || x.charAt(i) === "I" || x.charAt(i) === "o" || x.charAt(i) === "O"
		|| x.charAt(i) === "u" || x.charAt(i) === "U" || x.charAt(i) === "y" || x.charAt(i) === "Y")
		{
			j++;
		}
	}
	return(j);
}

function inverser(x)
{
	var j="";
	for (var i=x.length-1; i>=0; i--)
	{
		j+=x.charAt(i);
	}

	if(j.toLowerCase() === x.toLowerCase())
	{
		console.log("Ce mot est un palindrome !")
	}
	return(j.toLowerCase());	
}

function trouverLettreLeet(x, i)
{
	if (x.charAt(i) === "a" || x.charAt(i) === "A")
	{
		var j="4";
	}
	if (x.charAt(i) === "b" || x.charAt(i) === "B")
	{
		var j="8";
	}
	if (x.charAt(i) === "e" || x.charAt(i) === "E")
	{
		var j="3";
	}
	if (x.charAt(i) === "l" || x.charAt(i) === "L")
	{
		var j="1";
	}
	if (x.charAt(i) === "o" || x.charAt(i) === "O")
	{
		var j="0";
	}
	if (x.charAt(i) === "s" || x.charAt(i) === "S")
	{
		var j="5";
	}
	return(j);
}

function convertirEnLeetSpeak(x)
{
	var j="";
	for(i=0; i<x.length; i++)
		{
			if((x.charAt(i) === "a") || (x.charAt(i) === "A") || (x.charAt(i) === "e")
			|| (x.charAt(i) === "E") || (x.charAt(i) === "o") || (x.charAt(i) === "O")
			|| (x.charAt(i) === "u") || (x.charAt(i) === "U") || (x.charAt(i) === "y")
			|| (x.charAt(i) === "Y"))
			{
				j+=trouverLettreLeet(x, i);
			}

			else
			{
				j+=x.charAt(i);	
			}
		}
	return(j);
}

var mot = prompt("Entrez un mot SVP");
console.log("Le mot " + mot + " contient " + mot.length + " caractère(s)");
console.log("Il s'écrit en minuscules " + mot.toLowerCase());
console.log("Il s'écrit en majuscules " + mot.toUpperCase());
console.log("Ce mot contient " + compterNbVoyelles(mot) + " voyelle(s) et " + Number(mot.length-compterNbVoyelles(mot)) + " consonne(s).");
console.log("Ce mot s'écrit " + inverser(mot) + " à l'envers.");
console.log("Ce mot s'écrit " + convertirEnLeetSpeak(mot) + " en leet speak.")