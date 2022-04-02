#include <stdio.h>
#include <stdlib.h> 

int maximumTableau(int tableau[], int tailleTableau, int valeurMax);

int main(int argc, char *argv[])
{

	int tableau[4]={0}, valeurMax = 0;
	tableau[0]=15;
	tableau[1]=22;
	tableau[2]=81;
	tableau[3]=13;
	printf("%d\n", maximumTableau(tableau, 4, valeurMax));

	return 0;
}
 

int maximumTableau(int tableau[], int tailleTableau, int valeurMax)
{
	int i = 0, max = 0;
	for (i=0; i< tailleTableau-1; i++)
	{
		if(tableau[i] > tableau[i+1])
		{
			max = tableau[i];	
		}
	}
	return max;
}
