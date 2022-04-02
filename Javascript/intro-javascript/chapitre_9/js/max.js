var valeurs = [11, 3, 7, 2, 9, 10];
j=0;
for(var i=0; i<valeurs.length; i++)
{
	if (Math.max(j,valeurs[i]) != j)
	{
		j = valeurs[i];
	};
}
console.log("Le maximum des éléments vaut " + j);