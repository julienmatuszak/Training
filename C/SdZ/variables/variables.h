#ifndef variables_h

#define variables_h

typedef struct Coordonnees Coordonnees;
struct Coordonnees
{
	int x;
	int y;
};

typedef struct Personne Personne;
struct Personne
{
	char nom[100];
	char prenom[100];
	char adresse[100];

	int age;
	int garcon;
};

typedef enum Volume Volume;
enum Volume
{
	FAIBLE = 10, MOYEN = 50, FORT = 100
};

void initialiserCoordonnees(Coordonnees* point);

#endif
