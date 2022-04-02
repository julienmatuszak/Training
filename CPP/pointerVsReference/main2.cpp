#include <iostream>

using namespace std;

int main()
{
    int age = 21;
    int &referenceSurAge = age;

    cout << referenceSurAge;

    referenceSurAge  = 40;

    cout << referenceSurAge;


    return 0;
}
