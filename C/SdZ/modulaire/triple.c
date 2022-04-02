#include <stdio.h>
#include <stdlib.h>
  

int resultat;
int triple(int nombre); // Prototype de fonction
 
int main(int argc, char *argv[])
{
    triple(15); // On appelle la fonction triple, qui modifie la variable globale resultat
    printf("Le triple de 15 est %d\n", resultat); // On a accès à resultat
 
    return 0;
}
 
int triple(int nombre)
{
    resultat = 3 * nombre;
    return resultat;
}
