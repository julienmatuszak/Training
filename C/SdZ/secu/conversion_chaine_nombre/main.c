#include <stdio.h>
#include <stdlib.h>
#include <string.h>

long lireLong();
int lire(char *chaine, int longueur);
void viderBuffer();
double lireDouble();
char* replacechar(char* str, char find, char replace);


int main(int argc, char* argv[])
{
    long age = 0;
    double poids = 0;

    printf("Quel est votre âge ? ");
    age = lireLong();
    printf("Ah! Vous avez donc %d ans !\n\n", age);
    printf("Et combien pesez-vous ? ");
    poids = lireDouble();
    printf("Ah! Vous pesez donc %f kgs !\n\n", poids);

    return 0;
}

long lireLong()
{
    char nombreTexte[100] = {0};

    if (lire(nombreTexte, 100))
    {
        return strtol(nombreTexte, NULL, 10);
    }
    else
    {
        return 0;
    }
}

int lire(char *chaine, int longueur)
{
    char *positionEntree = NULL;

    if (fgets(chaine, longueur, stdin) != NULL)
    {
        positionEntree = strchr(chaine, '\n');
        if (positionEntree != NULL)
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

double lireDouble()
{
    char nombreTexte[100] = {0};

    if (lire(nombreTexte, 100))
    {
        for (int i =0; i<100; i++)
        {
            if (nombreTexte[i] == ',')
            {
                 nombreTexte[i] = '.';
            }
        }
    return strtod(nombreTexte, NULL);
    }
    else
    {
        return 0;
    }
}
