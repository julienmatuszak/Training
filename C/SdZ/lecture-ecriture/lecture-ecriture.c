#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "lecture-ecriture.h"

int main(int argc, char *argv[])
{
	FILE* fichier = NULL;
	int age = 0;
	int caractereActuel = 0;
	int score[3]={0};
	char chaine[TAILLE_MAX] = "";
	char chaine2[TAILLE_MAX] = "";

	rename("test", "test_temp");
	remove("test");
    fichier = fopen("test", "w+");

	if (fichier != NULL)
	{
		printf("Le fichier s'est ouvert !\n");
		fputc('A', fichier); // Écriture du caractère A
		fputs("lors les petits gars?\nCa va?\n", fichier);
		fclose(fichier);


		fichier = fopen("test", "r+");
		while((caractereActuel = fgetc(fichier)) != EOF)
        {
        	printf("%c", caractereActuel);
    	} //tres attention a faire comme ca et pas en deux moments separes sinon un point d'interrogation apparait et je ne comprends pas trop pourquoi

        printf("Quel age avez-vous ?\n");
        scanf("%d", &age);
        fprintf(fichier, "Vous avez donc %d ans.\n", age);
        fclose(fichier);

        fichier = fopen("test", "r+");

		/*fgets(chaine, TAILLE_MAX, fichier);
		printf("%s", chaine);
		fclose(fichier); */ 	
		
		while (fgets(chaine, TAILLE_MAX, fichier) != NULL)
		{
			printf("%s", chaine);
		}

		fprintf(fichier, "%d %d %d\n", 15, 20, 30);

		printf("%ld\n", ftell(fichier));
		fseek(fichier, 0, SEEK_SET);
		printf("%ld\n", ftell(fichier));
		fclose(fichier);

		fichier = fopen("test", "r");

		fscanf(fichier, "%s", &chaine2);
		printf("%s\n", chaine2);

		fclose(fichier);
		
		fichier = fopen("test2", "r");
		fscanf(fichier, "%d %d %d", &score[0], &score[1], &score[2]);
		printf("Les meilleurs scores sont : %d, %d et %d\n", score[0], score[1], score[2]);
		
		printf("%ld\n", ftell(fichier));
		rewind(fichier);
		printf("%ld\n", ftell(fichier));
		fclose(fichier);

	}

	else
	{
		printf("Le fichier ne s'est pas ouvert !\n");
	}

	return 0;
}
