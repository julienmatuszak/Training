#include <stdio.h>
#include <stdlib.h> 

void copierTableau(int tableauOriginal[], int tableauCopie[], int tailleTableau);

int main(int argc, char *argv[])
{
	int tableauOriginal[4]={0}, tableauCopie[4]={0};
	tableauOriginal[0]=1;
	tableauOriginal[1]=2;
	tableauOriginal[2]=3;
	tableauOriginal[3]=4;
	copierTableau(tableauOriginal, tableauCopie, 4);
	printf("%d, %d, %d, %d\n", tableauCopie[0], tableauCopie[1], tableauCopie[2], tableauCopie[3]);

	return 0;
}
 

void copierTableau(int tableauOriginal[], int tableauCopie[], int tailleTableau)
{
	int i = 0;
	for (i=0; i< tailleTableau; i++)
	{
		tableauCopie[i] = tableauOriginal[i];
	}
}
