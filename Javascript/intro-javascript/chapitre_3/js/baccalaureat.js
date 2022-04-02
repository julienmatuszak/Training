var note1 = Number(prompt("Quelle est votre première note ? "));
var note2 = Number(prompt("Quelle est votre deuxième note ? "));
var note3 = Number(prompt("Quelle est votre troisième note ? "));

var moy = Number(Number(note1 + note2 + note3)/3);

if(moy < 0 || moy > 20)
{
	console.log("Votre moyenne n'est pas comprise entre 0 et 20 ! Réessayez s'il vous plaît.");
}
else if (moy < 10)
{
	console.log("Désolé, vous êtes recalé. Votre moyenne est en-dessous de 10.");
}
else if (moy >= 10 && moy < 12)
{
	console.log("Vous êtes reçu. Votre moyenne est entre 10 et 12.");
}
else if (moy >= 12)
{
	console.log("Bravo! Vous êtes reçu avec mention. Votre moyenne est au-dessus de 12.");
}
else
{
	console.log("Je n'ai pas compris vos notes ! Merci de les réécrire.");
}