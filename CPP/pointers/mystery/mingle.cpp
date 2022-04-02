#include <iostream>
#include <string>
#include <ctime>
#include <cstdlib>
#include "mingle.h"

using namespace std;

string mingle(string motMystere)
{
    string motMelange("");
    int nbAleatoire(0);
    srand(time(0));
    do
    {
        nbAleatoire = rand() % motMystere.size();
        motMelange.push_back(motMystere[nbAleatoire]);
        motMystere.erase(nbAleatoire, 1);
    } while(motMystere.size() > 0);

    return motMelange;

}
