#include <stdlib.h>
#include <string.h>
#include <stdio.h>

//we define the function inside main 
void fibonacci(int n)
{
    static int n1 = 0, n2 = 1, n3;
    if(n == 2)
    {
        return ;
    }
    else
    {
        n3 = n1 + n2;
        printf(" %d", n3);
        n1 = n2;
        n2 = n3;
        fibonacci(--n);
    }
}

int main(void)
{
    char *end; //we define the pointer to the character at the end of the buffer file from stdin to run the loop
    char buf[50];//we define the max number of characters per line since fgets reads per line
    
    int previous_term = 0;
    int next_term = 1;
    int number_of_terms = 0;

    printf("Select the number of terms : ");
    
    //we replace scanf by fgets
    do{//we do at least one loop because the file has to be read
        if(!fgets(buf, sizeof buf, stdin))//fgets return the pointer to the char array
        //if stdin has nothing the loop breaks and the program exits.
            break;
            
        //this is to remove the chariot return at the end of the line
        buf[strlen(buf) - 1] = 0;
        
        //if this statement is reached, it means fgets got the string of stdin, it now has to convert it 
        //to an integer, we use the strtol function that returns an integer, and takes as parameters
        //the char array to convert, the numeric base, here 10, at the end, and in the middle,
        //according to the reference, the end pointer is a pointer to a char whose value is set to the next character
        //in the string after the numerical value
        number_of_terms = strtol(buf, &end, 10);
        
    } while(end != buf + strlen(buf));
    //now that the end pointer is set by the function, we can check if there is more to read in the file
    //the condition of the loop is that the pointer points to the special character at the end of the buffer file
    //in that case, it is the base of the character array + the size of the array
    //this is for the special case where end has finished reading a numerical character but has not reached
    //the end of the line
    
    printf("%s", "The terms of the Fibonacci sequence are : ");
    printf("%d %d", previous_term, next_term);

    //we execute the recursive function the number of times necessary, we have to subtract 1 as the first term 0
    //does not count
    fibonacci(number_of_terms);
    printf("\n");

    return 0;
}
