#include <stdio.h>
#include <stdlib.h> 

void ordonnerTableau(int tableau[], int tailleTableau);

int main(int argc, char *argv[])
{
	int tableau[4]={0};
	tableau[0]=15;
	tableau[1]=81;
	tableau[2]=22;
	tableau[3]=13;
	ordonnerTableau (tableau, 4);
	printf("%d, %d, %d, %d\n", tableau[0], tableau[1], tableau[2], tableau [3]);

	return 0;
}
 

void ordonnerTableau(int tableau[], int tailleTableau)
{
	int i = 0, j = 0, k = 0;
	for (i=0; i< tailleTableau; i++)
	{
		for(j=i+1; j<tailleTableau; j++)
		{
			if (tableau[j] < tableau[i])
				{
					k=tableau[j];
					tableau[j]= tableau[i];
					tableau[i]=k;
				}
		}
	}
}
