#include <stdio.h>
#include <math.h>

void main()
{
    int sum = 0, ways = 0, i = 9, j = 9, k = 8, sum_ref = 0;
    printf("Enter the sum you which to calculate : ");
    scanf("%d", &sum);

    if (sum <= i)
    {
        i = sum;//we set the index to the sum because it can't go over it
        for (i; i >=1; --i)
        {
            
        }
    }

    for(i; i >= 1; --i)//we start couting from 9
    {
        //we initalize the variable to compare to sum to i
        sum_ref = i;//9 for the first
        j = sum - i;//3
        k = j;//3
        while(k > 0)
        {
            
            k--;
        }

        //we define a new index to iterate through the countdown to 1
        //we add the next number and if the sum is under 12, we keep going
        for(j = i-1; j >=1; --j)
        {
            if(sum_ref+j > sum)//8 7 6 5 4
                continue;
            if(sum_ref+j == sum)//3
            {
                ways++;//we add 1 to the count, here we have 1 , 9+3
                sum_ref = i;//9, we reinitalize and move to the next j
                //in case there are several combinations, we need to reinitialize j
                //to the last digit where there was a combination
                k--;//2
                printf("the sum is %d and %d\n", i, j);
                printf("k = %d", k);
                j = k;//2
                continue;
            }
            if(sum_ref + j < sum)//9+2 = 11 OK
            {
                k = j;
                sum_ref +=j;
                continue;
            }
        }
    }

    printf("There are %d way(s) to calculate the sum of %d", ways, sum);
}