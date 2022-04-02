#include <stdio.h> //for fgets and printf functions
#include <stdlib.h> //for strtol
#include <string.h> //for strlen function

int main(void)
{
    char buf[20];
    char *end;
    int i = 1;
    int number;//the number of times to factorize
    int result = 1;//the number we will factorize

    printf("Enter the number you wish to know the factorial of : ");

    do{
        if(!fgets(buf, strlen(buf), stdin))
            break;
        buf[strlen(buf) - 1] = 0;
        number = strtol(buf, &end,10);
    }while(end != buf + strlen(buf));

    for(i; i <= number; ++i)
    {
        result *= i; //the factorization
    }
    printf("%d", result);

    return 0;
}