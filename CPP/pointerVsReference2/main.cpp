#include <iostream>

struct Coordonnees
{
	int x;
	int y;
};

void remiseAZero(Coordonnees *pointAModifier);

int main()
{
	Coordonnees point;

	remiseAZero(&point);

	return 0;
}

void remiseAZero(Coordonnees *pointAModifier)
{
	pointAModifier->x = 0;
	pointAModifier->y = 0;
}
