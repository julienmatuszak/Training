#include <stdio.h>
#include <stdlib.h> 

double moyenneTableau(int tableau[], int tailleTableau);

int main(int argc, char *argv[])
{

	int tableau[4]={0};
	tableau[0]=1;
	tableau[1]=2;
	tableau[2]=3;
	tableau[3]=4;
	printf("%lf\n", moyenneTableau(tableau, 4));

	return 0;
}
 

double moyenneTableau(int tableau[], int tailleTableau)
{
	int i = 0;
	double somme = 0;
	for (i=0; i< tailleTableau; i++)
	{
		somme += tableau[i];
	}
	return somme/tailleTableau;
}
