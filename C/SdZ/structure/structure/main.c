#include <stdio.h>
#include <stdlib.h>

typedef struct Personne Personne;
struct Personne
{
    int age;
    int garcon;

    char nom[100];
    char prenom[100];
    char adresse[100];
};

void initialiserPersonne(Personne* point)
{
    point->age = 0;
    point->garcon = 0;

    (*point).nom;
    (*point).prenom;
    (*point).adresse;
}


int main(int argc, char *argv[])
{
    int i = 2;
    Personne joueurs[i];

    for (i = 0; i < 2; i++)
    {
        initialiserPersonne(&joueurs[i]);
        printf("Quel est votre nom ? \n");
        scanf("%s", joueurs[i].nom);
        printf("Quel est votre prénom ? \n");
        scanf("%s", joueurs[i].prenom);

        printf("Vous vous appelez %s %s.\n\n", joueurs[i].prenom, joueurs[i].nom);
    }

    return 0;
}

