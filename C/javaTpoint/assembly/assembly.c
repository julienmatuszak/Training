#include <stdio.h>

void main()
{
    int a = 10, b = 0;

    asm
    (
        //the model of the asm function is asm("assembly template" : output operands : input operands)
        //the assembly templates are the statements being executed, i.e. copy a variable, add a variable, etc.
        //each input/output operand within the asm function is described by an operand constraint string followed
        //by an expression in parentheses. The = indicates that the operand is written, hence each output operand
        //must have the "=" sign, the r means that the operand must be located in the register
        //the expression in the parentheses refers to the identifier
        "mov %1,%0\n\t"//copies to the location of the variable b the value of the variable a
        //this is the equivalent of the statement : b = a;
        //the operands are referred two by the escape sequences %0 and %1, 0 and 1 being the cardinal numbers
        //(starting with 0) with which the order in which the operands are read from the register.
        //0 is the output operand (as the line following the template is intended for the output operands)
        //1 is the first input operand (as the line for input operands follows the one for the output)
        :"=r"(b)//writes in the register of the variable b the result of the operation
        :"r"(a)//takes the input from the register of the variable a
        //"mov bx,b\n\t"
       // "add ax,bx\n\t"
        //"mov c,ax\n\t"
    );
    printf("b = %d\n", b);

    //we will now add 10 to b
    asm
    (
        "add $10, %1"//here we add the value 10 to b, the equivalent statement is b += 10;
        //we don't necessarily need to add \n\t btw
        :"=r"(b)//we write in the register of the variable b
        :"r"(b)//we take the input from the register of the variable b

    );
    printf("b = %d\n", b);

    //we create a new variable and add the sum of both variables, and we should get 30 as a result
    int c = 0;
    asm
    (
        "mov %2, %0\n\t"//we copy what is in b (2nd output operand) to the output which is variable c 
        "add %1, %0\n\t"//we add to the result the content of a (1st output operand) to the variable c
        :"=&r"(c)
        //if we just leave "=r"(c), the problem will be that the register will be mixed up
        //because gcc by default assumes that the input operands will be used before updating the output 
        //operands and here we are updating an output operand with the first command
        //so here gcc will consider the same register for both %0 and %1 because we first update c %0 
        //before reading the input %a 10 , so the operations
        //would give c = b (20) then c += c (40) instead of c+=a, 
        //so we need to tell the compiler that the output operand
        //may be used before the inputs are consumed, that's why we add an &
        :"r"(a), "r"(b)
    );
    printf("a = %d\n", a);
    printf("b = %d\n", b);
    printf("c = %d\n", c);

}