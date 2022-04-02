#include <stdio.h>
#include <stdlib.h> 

int main(int argc, char *argv[])
{
int nombre = 0;
int *pointeur = &nombre;
printf("nombre vaut %d\n", nombre);
printf("&nombre vaut %d\n", &nombre);
printf("pointeur vaut %d\n", pointeur);
printf("*pointeur vaut %d\n", *pointeur);
printf("&pointeur vaut %d\n", &pointeur);

return 0;
}
