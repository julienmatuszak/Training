#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "dico.c"
#include "pendu.h"

int main(int argc, char *argv[])
{
	int i = 0;
	int nombreRestant = 10;
	char maLettre = "";
	char motSecret[100] = {0};
	char motDevine[100] = {0};
	int tailleMot = 0;

	if(!piocherMot(motSecret))
		exit(0);

	tailleMot = strlen(motSecret);
	printf("%d", tailleMot);

	for(i = 0; i<tailleMot; i++)
		motDevine[i] = '*';

	printf("Bienvenu au jeu du Pendu !\n");

	while(strcmp(motDevine,motSecret) != 0)
	{
		int nombreRef = 0;
		if (nombreRestant == 0)
		{
			printf("Vous n'avez plus de coups a jouer ! Vous avez perdu !\n");
			exit(0);
		}
		printf("Il vous reste %d coup(s) a jouer\n", nombreRestant);
		printf("Quel est le mot secret ? %s\n", motDevine);
		printf("Proposez une lettre : ");
		maLettre = lireCaractere();
		for (i=0; i<6; i++)
		{
			if (maLettre == motSecret[i])
			{
				motDevine[i] = motSecret[i];
				nombreRef = 1;
			}
		}
		if(nombreRef != 1)
		{
				nombreRestant --;
		}
	}
	printf("\nGagne ! Le mot secret etait bien : %s\n", motSecret);

	return 0;
}

char lireCaractere()
{
	char caractere = 0;
	caractere = getchar();
	caractere = toupper(caractere);
	while(getchar() != '\n');
	return caractere;
}
