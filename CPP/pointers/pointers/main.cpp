#include <iostream>

using namespace std;

int main()
{
    int a = 5;
    int *p = &a;
    cout << p << endl;
    cout << *p << endl;
    int &ref = a;
    cout << &ref << endl;
    cout << ref << endl;
    cout << &p << endl;
    return 0;
}
