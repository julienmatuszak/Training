#include <stdio.h> // to get the scan and print functions
#include <stdlib.h> //to get the itoa function
#include <string.h> //to get the strcmp and the strcpy functions

//this program is done following the javaTpoint
int main(void)
{
    char buf[20];
    char *end;

    int number = 0, reverse_number = 0, sum = 0, temp = 0;
    printf("Enter the number of which you want to check if it is a palindrome number : ");
    scanf("%d", &number);
    do{
        if(!fgets(buf, sizeof(buf), stdin))
            break;
        buf[strlen(buf)-1] = 0;
        strtol(buf, &end, 10);
    }while(end != buf + strlen(buf));

    //hold the number in a temporary variable, this is needed because number will be destroyed
    temp = number;

    /*reverse the number using a mathematical algorithm:
    - we take every digit by successively dividing by 10 the number to reverse 
    - we successively multiply by 10 each digit to get the number reversely
    - we shift the number until it reaches 0
    */
    while(number > 0)
    {
        reverse_number += number % 10; //we get the last digit for the 1st loop, and so on 6 65 654
        reverse_number *= 10; // we multiply successively each digit by 60 650 6540
        number /= 10; //we shift 45 4
    }
    reverse_number /= 10; //ugly but we have too much shifted on the right :)

    //compare the temporary number with the reversed number
    if(reverse_number == temp)
        printf("Your number is a palindrome number!");
    else
         printf("Your number is not a palindrome number!");

    return 0;
}