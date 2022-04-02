function calculatrice(x, sign, y)
{	
	if (sign == "+")
	{
		return x + y;
	}
	if (sign == "-")
	{
		return x - y;
	}
	if (sign == "*")
	{
		return x * y;
	}
	if (sign == "/")
	{
		return x/y;
	}
}

x = Number(prompt("Indiquer un nombre"));
sign = prompt("Indiquer le signe d'une opération de base");
y = Number(prompt("Indiquer un autre nombre"));

console.log(calculatrice(x,sign,y));