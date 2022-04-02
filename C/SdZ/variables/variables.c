#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "variables.h"

int main(int argc, char *argv[])
{
	Coordonnees point; // ceci peut etre initialise manuellement= {0,0}; et aussi au lieu de struct car l'alias est fait dans le header

	/*point.x = 0;
	point.y = 0; ceci aussi est une initialisation manuelle*/

	initialiserCoordonnees(&point); //initialisees dans la fonction
	//printf("%d\n", point.x); on peut verifier

	Personne joueurs[2] = {"", "", "", 0, 0}; //initialisees manuellement

	for (int i = 0; i<2; i++)
		{
			printf("Quel est votre nom ? ");
			scanf("%s", joueurs[i].nom);
			printf("Votre prenom ? ");
			scanf("%s", joueurs[i].prenom);
			printf("Vous vous appelez %s %s.\n", joueurs[i].nom, joueurs[i].prenom);
		}

	int volume = 50;	
	if(volume==MOYEN)
	{
		printf("Le volume est de %d %.", MOYEN);
	}

	return 0;
}

void initialiserCoordonnees(Coordonnees* point)
{
	/*(*point).x = 0;
	(*point).y = 0; ceci est la premiere ecriture, mais celle dessous est plus souvent utilisee*/
	point->x=0;
	point->y=0;
	/*ATTENTION! on travaille sur un pointeur, on utiliser la fleche, mais si on travaillait sur une variable on utiliserait un point (.)
	En gros, si on ecrit point.x=10 il faut avoir cite la variable point avant et on lui donne 10, mais si on ecrit point->x=10 on attribue 10 au point EN PASSANT PAR SON POINTEUR!!*/
}
