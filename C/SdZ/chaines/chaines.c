#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "chaines.h"

int main(int argc, char *argv[])
{
	char lettre = 0;
	scanf("%c", &lettre);
	printf("%c\n", lettre);

	char chaine[6];
	chaine[0]= 'S';
	chaine[1]= 'a';
	chaine[2]= 'l';
	chaine[3]= 'u';
	chaine[4]= 't';
	chaine[5]= '\0';

	printf("%s\n", chaine);

	char chaine2[]="Salut";

	printf("%s\n", chaine2);

	char prenom[100];

	printf("Comment tu t'appelles? ");
	scanf("%s", &prenom);
	printf("Salut %s!\n", prenom);


	int longueurChaine = strlen(prenom);
	printf("La chaine %s fait %d caracteres de long.\n", prenom, longueurChaine);

	int longueurChaine2 = strlen2(prenom);
	printf("La chaine %s fait %d caracteres de long.\n", prenom, longueurChaine2);

	char copie[100]={0};
	strcpy(copie, prenom);

	printf("La copie de %s est %s\n", prenom, copie);

	char chaine1[100]="Salut "; //Verifier que la longueur soit bien definie et suffisamment grande car il faudra y ajouter l'autre chaine
	strcat(chaine1, prenom);
	printf("La chaine 1 vaut maintenant %s\n", chaine1);

	if(!strcmp(chaine1, chaine1))
	{
		printf("Les chaines sont identiques !\n");
	}

	char *suiteChaine = NULL, *finChaine = NULL, *debutChaine = NULL, *deuxiemeL = NULL;
	suiteChaine = strchr(prenom, 'l');
	finChaine = strrchr(prenom, 'l');
	debutChaine = strpbrk("jululien", "j");
	deuxiemeL = strstr("jululien", "li");

	if(suiteChaine != NULL && finChaine != NULL && debutChaine != NULL)
	{
		printf("Le debut de %s est %s et la vraie fin de %s est %s et si on reprend tout depuis le tout debut, ca fait %s et la deuxieme fois que l apparait car il y a un i apres correspond au \"l\" de %s\n", prenom, suiteChaine, prenom, finChaine, debutChaine, deuxiemeL);
	}

	char chaine3[100];
	int age = 15;
	sprintf(chaine3, "Tu as %d ans !", age);

	printf("%s\n", chaine3);

	return 0;
}

int strlen2(const char* chaine)
{
	int nombreDeCaracteres = 0;
	char caractereActuel = 0;

	do
	{
		caractereActuel = chaine[nombreDeCaracteres];
		nombreDeCaracteres++;
	}
	while(caractereActuel != '\0');

	nombreDeCaracteres--;

	return nombreDeCaracteres;
}
