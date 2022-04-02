#include <iostream>

using namespace std;

inline int carre(int nombre);

int main()
{
    cout << carre(10) << endl;

    return 0;
}

inline int carre(int nombre)
{
    return nombre * nombre;
}
