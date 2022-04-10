#include <iostream>
#include <vector>
using namespace std;

int main()
{
    int const nombreNotes(6);
    vector<double> notes;

    for (int i(0); i<nombreNotes; ++i)
    {
        notes.push_back(12.5);
        notes.push_back(10);
        notes.push_back(8);
        notes.push_back(11);
        notes.push_back(14);
    }

    double moyenne(0);
    for(int i(0); i<nombreNotes; ++i)
    {
        moyenne += notes[i];   //On additionne toutes les notes
    }
   //En arrivant ici, la variable moyenne contient la somme des notes (79.5)
   //Il ne reste donc qu'à diviser par le nombre de notes
    moyenne /= nombreNotes;

    cout << "Votre moyenne est : " << moyenne << endl;

    return 0;
}
