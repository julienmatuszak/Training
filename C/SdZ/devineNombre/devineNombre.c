#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char *argv[])
{
	int nombreMystere, nombreEntre = 0;
	const int MAX = 100, MIN = 1;
	srand(time(NULL));
	nombreMystere = (rand() % (MAX - MIN + 1)) + MIN;

	while (nombreEntre != nombreMystere)
	{
		printf("Quel est le nombre ? ");
		scanf("%d", &nombreEntre);
		if (nombreEntre > nombreMystere)
			{printf ("C'est moins !\n");}
		if (nombreEntre < nombreMystere)
			{printf ("C'est plus !\n");}
	}

	printf("Bravo, vous avez trouve le nombre mystere !!!\n");

	return 0;
}
