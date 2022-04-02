#include <iostream>
#include <string>
#include "mingle.h"

using namespace std;

int main()
{
    int nbAleatoire(0);
    string motMystere("");
    string motMelange("");
    string motADeviner("");

    cout << "Saisissez un mot" << endl;
    cin >> motMystere;

    motMelange = mingle(motMystere);

    do
    {
        cout << "\nQuel est ce mot ? " << motMelange << endl;
        cin >> motADeviner;
        if (motADeviner != motMystere)
        {
            cout << "Ce n'est pas le mot !\n" << endl;
        }
    } while(motADeviner != motMystere);

    cout << "Bravo !";

    return 0;
}
