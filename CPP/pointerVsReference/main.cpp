#include <iostream>

using namespace std;

int main()
{
    int age = 21;
    int *pointeurSurAge = &age;

    cout << *pointeurSurAge;

    *pointeurSurAge  = 40;

    cout << *pointeurSurAge;


    return 0;
}
