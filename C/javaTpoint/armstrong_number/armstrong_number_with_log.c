#include <stdio.h> //for printf function
#include <stdlib.h> //for strtol function
#include <string.h> //for strlen function
#include <math.h> //for pow, ceil, floor and log10 function

int main(void)
{
    char buffer[20];
    char *end;

    int number = 0;
    int number_of_digits = 0;
    int result = 0;
    int temp = 0;

    printf("Enter the number you wish to know if it is an Armstrong number : ");

    do{
        if(!fgets(buffer, sizeof(buffer), stdin))
            break;
        buffer[strlen(buffer) - 1] = 0;
        number = strtol(buffer, &end, 10);
    }while(end != buffer + strlen(buffer));

    printf("%d", number);

    temp = number;

    number_of_digits = floor(log10(number)) + 1;
    //floor is the math function to truncate the double number to the bottom integer
    //the log10 function linearize the power of 10 of the number which corresponds to the number of digits minus 1
    //we then add one.
    //this does not work with 0 BTW

    do{
        result += ceil(pow(number % 10, number_of_digits));
        //for some reason, the pow function is not that accurate and ceil must be used
        //that's why it's better to use the loop just like the first solution
        number /= 10;
    }while(number);


    if(result == temp)
        printf("Your number is an Armstrong number!");
    else
        printf("Your number is not an Armstrong number!");

    return 0;
}