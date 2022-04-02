#include <stdio.h> // to get the scan and print functions
#include <stdlib.h> //to get the itoa function
#include <string.h> //to get the strcmp and the strcpy functions

int main(void)
{
    int number = 0;
    printf("Enter the number of which you want to check if it is a palindrome number : ");
    scanf("%d", &number);
    int reverse_number = number; //we create a different variable to compare
    char string_number[20], string_reverse_number[20];
    itoa(number, string_number, 10); //good to know that the itoa can be indeed done inside the prinf function
    //although it is necessary to introduce the variable beforehand (like in every program in c language)
    //string_reverse_number = string_number; //this is not possible in C as string is not a defined type
    strcpy(string_reverse_number, string_number);// this function is necessary to copy the new string, it can also be done "manually"
    if(strcmp(strrev(string_reverse_number), string_number) == 0)
        printf("Your number is a palindrome number!");
    else
        printf("Your number is not a palindrome number!");

    return 0;
}