#include <stdio.h>
#include <stdlib.h> 
#include "tableaux.h"

int main(int argc, char *argv[])
{

int tableau[4] = {0};

tableau[0] = 10;
tableau[1] = 15;
tableau[2] = 3;

printf("%d\n", tableau);
printf("%d\n", tableau[0]);
printf("%d\n", tableau[1]);
printf("%d\n", *tableau);
printf("%d\n", *(tableau +1));

affiche(tableau, 4);
affiche2(tableau, 4);
 
return 0;
}
 
void affiche(int *tableau, int tailleTableau)
{
    int i;
 
    for (i = 0 ; i < tailleTableau ; i++)
    {
        printf("%d\n", tableau[i]);
    }
}

void affiche2(int *tableau, int tailleTableau)
{
    int i;
 
    for (i = 0 ; i < tailleTableau ; i++)
    {
        printf("%d\n", tableau[i]);
    }
}
