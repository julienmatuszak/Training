#include <stdio.h> //for printf and fgets function
#include <stdlib.h> //fpr strtol function
#include <string.h> //for strlen function

/*the flow goes:
- we get the number input from user
- we put it in a temporary number and we add a result of the Armstrong operations variable for comparison
- we calculate the number of digits to get the length of the integer
- once we get the length, we can also perform the Armstrong operations with the digits 
- we compare the temporary number with the result and conclude
*/

int main(void)
{
    char buf[20];
    char *end;
    int number = 0; //the number to check if it is an Armstrong number or not
    int number_of_digits = 0; //the length of the digit input, temp = 0;
    int temp = 0; //we need to have a temporary number because number will be destroyed to get the number of digits
    int result = 0; //the result of the Armstrong operations
    printf("Enter the number you wish to know if it is an Armstrong number : ");

    //we get the number from user input (fgets)
    do{
        if(!fgets(buf, sizeof(buf), stdin))//careful, this is sizeof and not strlen!
            break;
        buf[strlen(buf) - 1] = 0;
        number = strtol(buf, &end, 10);
        //we cannot count the number of digits here because the strtol function
        //works on the string until end reaches the end of the buffer
    }while(end != buf + strlen(buf));

    //we put the number input in a temporary number
    temp = number;

    //we get the length of the number
    do{
        ++number_of_digits;
        number /= 10;
    }while(number);

    number = temp;//we need to do this operation again because we have to destroy number again for the calculations

    do{
        int base = 1;
        int rest = number%10;
        for(int i = 1; i <= number_of_digits; ++i)
        {
            base *= rest;
        }
        result += base;//this is being done from unity to ten, etc. but can be done in reverse
        number /= 10;
    }while(number);

    if(result == temp)
        printf("Your number is an Armstrong number!");
    else
        printf("Your number is not an Armstrong number!");

    return 0;
}
