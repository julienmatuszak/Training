var compte = {}

compte.titulaire = "Alex";
compte.solde = 0;

compte.crediter = function(x)
{
	compte.solde += x;
	return(compte.solde);
}
compte.debiter = function(x)
{	
	compte.solde -= x;
	return(compte.solde);
}
compte.decrire = function()
{
	var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
	return description;
}

console.log(compte.decrire());

compte.crediter(50);

console.log(compte.decrire());