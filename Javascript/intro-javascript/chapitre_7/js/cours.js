var stylo =
{
	type: "bille",
	couleur: "bleu",
	marque: "Bic"
};

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.couleur = "rouge";

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);

stylo.prix = 2.5;

console.log("Il coûte " + stylo.prix + " euros");