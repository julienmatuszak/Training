#include <stdio.h>
#include <stdlib.h>

int triple(int nombre)
{
	return 3 * nombre;
}

int main(int argc, char *argv[])
{
	int nombreTriple=0, nombreEntre = 0;
	
	printf("Entrez un nombre... ");
	scanf("%d", &nombreEntre);

	nombreTriple=triple(nombreEntre);
	printf("Le triple de ce nombre est %d\n", nombreTriple);

	return 0;
}
