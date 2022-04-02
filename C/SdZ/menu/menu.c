#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
	int choixMenu = 0;

	printf("=== Menu ===\n");
	printf("1. Royal Cheese\n");
	printf("2. Mc Deluxe\n");
	printf("3. Mc Bacon\n");
	printf("4. Big Mac\n");
	printf("Votre choix ? \n");
	scanf("%d", &choixMenu);
	
	printf("\n");

	switch(choixMenu)
	{
		case(1):
		printf("Vous avez choisi le Royal. Bon choix!");
		break;
		case(2):
		printf("Vous avez choisi le Royal. Bon choix!");
		break;
		case(3):
		printf("Vous avez choisi le Royal. Bon choix!");
		break;
		case(4):
		printf("Vous avez choisi le Royal. Bon choix!");
		break;
		default:
		printf("Vous n'avez rien choisi ou pas rentre de nombre correct. Vous ne mangerez rien, tant pis!");
		break;		
	}

	printf("\n\n");

	return 0;
}
