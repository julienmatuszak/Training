#include <stdio.h>

//the function will return the sum of the last two terms
int fibonacci(int n1, int n2)
{
    return (n1 + n2);
}

int main(void)
{
    int previous_term = 0;
    int next_term = 1;
    int number_of_terms = 0;

    printf("Select the number of terms : ");
    scanf("%d", &number_of_terms);
    printf("%s", "The terms of the Fibonacci series are : ");
    
    //print the first two terms of the series
    printf("%d %d", previous_term, next_term); 
    
    while(number_of_terms - 2 >= 0)
    {
        //for every next term, we apply the function and replace it via a temporary variable
        int temp = next_term;
        next_term = fibonacci(previous_term, next_term);
        previous_term = temp;
        number_of_terms--;
        printf(" %d", next_term); 
    }
    printf("\n"); 

    return 0;
}
    