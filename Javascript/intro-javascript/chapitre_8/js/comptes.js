var Compte =
{
	// Initialise le compte (on ne sait pas encore quel type)
	initCompte: function(titulaire, solde)
	{
		this.titulaire = titulaire;
		this.solde = solde;
	},

	// Les actions possibles
	crediter: function(x)
	{
		this.solde += x;
		return(this.solde);
	},
	debiter: function(x)
	{
		this.solde -= x;
		return(this.solde);
	},
	ajouterInterets: function()
	{
		this.solde = this.solde*(1 + this.interets);
		return(this.solde)
	},
	decrire: function()
	{
		var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
		return description;
	}
};

var CompteBancaire = Object.create(Compte);
// Initialise un type de compte
CompteBancaire.initCB = function(titulaire, solde)
{
	this.initCompte(titulaire, solde);
};

var CompteEpargne = Object.create(Compte);
// Initialise un autre type de compte
CompteEpargne.initCE = function(titulaire, solde, interets)
{
	this.initCompte(titulaire, solde);
	this.interets = interets;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());