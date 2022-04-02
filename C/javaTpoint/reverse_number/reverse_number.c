#include <stdio.h> // for print and fgets functions
#include <stdlib.h> // for strlen function
#include <string.h> // for strtol function

//the idea here is to get the last digit first with the modulo operator
//this last digit will be the first digit of the reverse number,
//which means we need to add it to the reverse number and multiply 
//it by 10 in the loop
/*So the algorithm goes:
- get number input
- get revese number in a loop with modulo and multiply operators
*/

int main(void)
{
    char buf[20];
    char * end;

    int number = 0, reverse_number = 0;

    printf("Enter the number you wish to reverse : ");

    do
    {
        if(!fgets(buf, sizeof(buf), stdin))
            break;
        buf[strlen(buf) - 1] = 0;
        number = strtol(buf, &end, 10);
    } while (end != buf + strlen(buf));
    
    do
    {
        reverse_number = reverse_number * 10 + number % 10;
        number /= 10; 
    } while (number);
    
    printf("The reverse number is : %d", reverse_number);

    return 0;
}