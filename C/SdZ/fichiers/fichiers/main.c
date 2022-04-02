#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    FILE* fichier = NULL;
    int age = 0;

    fichier = fopen("dossier/test.txt", "w");

    if (fichier != NULL)
    {
        printf("Quel âge avez-vous ?");
        scanf("%d", &age);
        fprintf(fichier, "Le Monsieur qui utilise le programme a %d ans\n", age);

        fputc('A', fichier);
        fputs("Salut les Zér0s\nComment allez-vous ?", fichier);
        fclose(fichier);
    }
    else
    {
        printf("Impossible d'ouvrir le fichier test.txt");
    }


    return 0;
}
