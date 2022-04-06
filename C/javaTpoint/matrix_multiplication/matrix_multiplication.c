#include <stdio.h> //scanf printf

int main(void) {
    int a[10][10];//we create the first matrix, non-initialized
    //as we don't know the number of rows
    int b[10][10];//we create the second matrix, non-initialized
    //as we don't know the number of columns
    int result[10][10];//we create the matrix resulting from the multiplication
    int r = 0;//number of rows initialized for both matrices
    int c = 0;//number of columns initialized for both matrices
    int i = 0;//index of the first loop
    int j = 0;//index of the second loop
    int k = 0;//we will need a third index for the multiplication

    printf("Enter the number of rows : ");
    scanf("%d", &r);
    printf("Enter the number of columns : ");
    scanf("%d", &c);

    //now that we have the dimensions of our matrices, we have to input
    //the numbers in them, we need a double loop for each matrix,
    //one loop for the row, one loop for the column
    printf("Enter the elements of the first matrix ");
    for(i = 0; i < r; ++i)
    {
        //we start with the first line
        for(j = 0; j < c; ++j)
        {
            //and then each column of the line
            scanf("%d", &a[i][j]);
        }
    }

    printf("Enter the elements of the second matrix ");
    for(i = 0; i < r; ++i)
    {
        //we start with the first line
        for(j = 0; j < c; ++j)
        {
            //and then each column of the line
            scanf("%d", &b[i][j]);
        }
    }

    //then we calculate and print each element
     for(i = 0; i < r; ++i)
    {
        //we start with the first line
        for(j = 0; j < c; ++j)
        {
            result[i][j] = 0; //we first have to initialize here,
            //otherwise we'll get undefined behavior
            for(k = 0; k < c; ++k)
            {
                result[i][j] += a[i][k] * b[k][j];//and then each column of the line   
            }
        }
    }  

    //and we print the resulting matrix
    printf("The matrix resulting from the multiplication of the matrices is :\n");
    for(i = 0; i < r; ++i)
    {
        //we start with the first line
        for(j = 0; j < c; ++j)
        {  
            printf("%d\t", result[i][j]);
        }
        printf("\n");
    }

    return 0;
}