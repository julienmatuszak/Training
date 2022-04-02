#include <stdio.h>
#include <stdlib.h>

void punition(int nombreDeLignes)
{
	int i;

	for (i=0; i<nombreDeLignes; i++)
	{
		printf("Je dois faire mon programme !\n");
	}
}

int main(int argc, char *argv[])
{
	punition(10);

	return 0;
}
