#include <stdio.h>

int main()
{
    int number = 0;
    printf("Enter the number of which you want to check if it is prime or not : ");
    scanf("%d", &number);
    for(int i = 2; i <= number-1; ++i)
    {
        if(number % i == 0)
        {
            printf("The number is not prime!");
            break;           
        }
        else if(i == number - 1)
        {
            printf("The number is prime!");
        }
    }
    return 0;
}