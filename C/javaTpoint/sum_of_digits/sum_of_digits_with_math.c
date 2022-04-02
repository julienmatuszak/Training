#include <stdio.h> //for printf and fgets function
#include <stdlib.h> //for strtol function
#include <string.h> //for strlen function

int main(void)
{
    char buf[20];
    char * end;

    int number = 0; // the number input
    int sum = 0; // the result

    printf("Enter the number you want to know the sum of its digits : ");
    do
    {
        if(!fgets(buf, sizeof(buf), stdin))
            break;
        buf[strlen(buf) - 1] = 0;
        number = strtol(buf, &end, 10);
    } while (end != buf + strlen(buf));

    do
    {
       sum += number%10;
       number /= 10; 
    } while (number);
    
    printf("The sum of digits of your number is %d", sum);
    
}