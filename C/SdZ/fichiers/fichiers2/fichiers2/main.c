#include <stdio.h>
#include <stdlib.h>
#define TAILLE_MAX 10
#define SEEK_SET, SEEK_CUR, SEEK_END

int main(int argc, char* argv[])
{
    FILE* fichier = NULL;
    int caractereActuel = 0;
    char chaine[TAILLE_MAX] = "";

    fichier = fopen("dossier/test.txt", "r");

    if (fichier != NULL)
    {
        do
        {
            caractereActuel = fgetc(fichier);
            printf("%c", caractereActuel);
        } while (caractereActuel != EOF);

        // Cette fonction ne va pas marcher, je ne sais pas encore pourquoi
        //mais je crois penser que c'est à cause du curseur
        int cursor = ftell(fichier);
        printf("%d\n", cursor);
        fseek(fichier, -4, SEEK_CUR);
        int cursor2 = ftell(fichier);
        printf("%d\n", cursor2);
        rewind(fichier);
        int cursor3 = ftell(fichier);
        printf("%d\n", cursor3);
        while (fgets(chaine, TAILLE_MAX, fichier) != NULL)
        {
        printf("%s", chaine);
        }
        fclose(fichier);
    }
    return 0;
}
