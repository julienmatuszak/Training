#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char *end; //pointer to the character at the end of the file
    char buf[50]; //array of characters that constitutes the buffer

    int number = 0, flag = 0;
    printf("Enter the number of which you want to check if it is prime or not : ");

    do{
        if(!fgets(buf, sizeof buf, stdin))
            break;

        buf[strlen(buf) - 1] = 0;

        number = strtol(buf, &end, 10);

    }while(end != buf + strlen(buf));

    for(int i = 2; i <= number/2; ++i)//here, we divide the loop by 2 so we could "flag"
    //when i reaches number/2 but we can also define a flag variable. 
    {
        if(number % i == 0)
        {
            printf("The number is not prime!");
            flag = 1;
            break;           
        }
    }
    //in case the loop is broken or ended, we check the flag, if it is 0, we conclude we have a prime
    if(flag == 0)
    {
        printf("The number is prime!");
    }
    return 0;
}