#include <iostream>

using namespace std;


int somme(int nb1, int nb2);
double somme(double nb1, double nb2);

int main()
{
    cout << somme(10, 15) << endl << somme(2.5, 0.3) << endl;

    return 0;
}

int somme(int nb1, int nb2)
{
    return nb1 + nb2;
}

double somme(double nb1, double nb2)
{
    return nb1 + nb2;
}
