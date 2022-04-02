#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "saisie_securisee.h"

int main(int argc, char* argv[])
{
    char nom[10];

    printf("Quel est votre nom ? ");
    fgets(nom, 10, stdin);
    printf("Ah ! Vous vous appelez donc %s !\n\n", nom);

    long age = 0;
    double poids = 0;
 
    printf("Quel est votre age ? ");
    age = lireLong();
    printf("Ah ! Vous avez donc %li ans !\n\n", age);
    printf("Et quel est votre poids ? ");
    poids = lireDouble();
    printf("Ah ! Vous pesez donc %lf kilos !\n\n", poids);
 
    return 0;

    return 0;
}

int lire(char *chaine, int longueur)
{
    char *positionEntree = NULL;

    if(fgets(chaine, longueur, stdin) != NULL)
    {
        positionEntree = strchr(chaine, '\n');
        if(positionEntree != NULL)
        {
            *positionEntree = '\0';
        }
        else
        {
            viderBuffer();
        }
        return 1;
    }
    else
    {
        viderBuffer();
        return 0;
    }
}

void viderBuffer()
{
    int c = 0;
    while (c != '\n' && c != EOF)
    {
        c = getchar();
    }
}

long lireLong()
{
    char nombreTexte[100] = {0};

    if(lire(nombreTexte, 100))
    {
        return strtol(nombreTexte, NULL, 10); //Because fgets cannot read strings.
    }
    else
    {
        return 0;
    }
}

double lireDouble()
{
    char nombreTexte[100] = {0};
    char* currentPos = NULL;

    if(lire(nombreTexte, 100))
    {
        if (currentPos= strchr(nombreTexte, ','))
            *currentPos = '.';

        return strtod(nombreTexte, NULL);
    }
    else
    {
        return 0;
    }
}
