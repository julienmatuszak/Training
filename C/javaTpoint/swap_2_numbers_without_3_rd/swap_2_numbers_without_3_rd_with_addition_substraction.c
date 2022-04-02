#include <stdio.h> //printf
#include <stdlib.h> //strtol, 
#include <string.h> //strlen

int main(void)
{
    char buf[2][20];
    char *end, *end2;

    int number1 = 0, number2 = 0;//the 2 numbers to swap

    printf("Enter the first number : ");
    scanf("%d", &number1);
    printf("Enter the second number : ");
    scanf("%d", &number2);

    number1 -= number2;
    number2 += number1;
    number1 = number2 - number1;

    printf("The first number is now : %d\n", number1);
    printf("The first number is now : %d", number2);

}