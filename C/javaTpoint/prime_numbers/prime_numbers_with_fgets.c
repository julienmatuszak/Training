#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char *end; //pointer to the character at the end of the file
    char buf[50]; //array of characters that constitutes the buffer

    int number = 0;
    printf("Enter the number of which you want to check if it is prime or not : ");

    do{
        if(!fgets(buf, sizeof buf, stdin))
            break;

        buf[strlen(buf) - 1] = 0;

        number = strtol(buf, &end, 10);

    }while(end != buf + strlen(buf));

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