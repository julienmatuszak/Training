//we know quite a bit
//but did we know that we can skip some parts in the for statement?
/*let i = 0;
for(;i < 3; i++){
    alert(i);//works
}

//or let i = 0; for(; i<3;) alert(i++)
//for(;;){}//this works and is an infinite loop
//break and continue cannot exist in a ternary condition statement

//labels for break and continue are very handy
outer: for(let i = 0; i <3; i++)
{
    for (let j = 0; j < 3; j++)
    {
        let  input = prompt(`Value at coords (${i},${j})`,'');
        if(!input) break outer;// without label, only the first loop would be broken, now both can be
    }
}
alert("Done!");

//the label must be inside the loop

let i = 3;
while(i)
{
    alert(i--);//last value is 1, if --i will show 2 then 1 then 0
}

let i = 0;
while (++i < 5) alert(i);//shows 1,2,3,4 because incrementation is done directly
//if was written  while(i++ < 5 ) alert(i);//shows 0,1,2,3,4

for (let i = 2; i <= 10; i += 2)
{
    alert(i);
}

let i = 0;
while(i < 3)
{
    alert( `number ${i++}!` );
}

let input;
do{
    input = prompt("What is your number?");
} while (input <= 100 && input);//the last part is false if num is null
// in case this is entered so we can get out of the loop, in case of an empty string for instance

let n = 10;
for(let i = 2; i <= n; ++i)
{
    for(let j = 2; j <= i; ++j){
        if (j == i)
        {
            alert(i);
        }
        if (i%j == 0)
        {
            break;
        }
    }
}

let n = 10;
nextPrime:
for(let i = 2; i <= n; i++){
    for(let j = 2; j < i; j++)
    {
        if (i%j == 0)
        {
            continue nextPrime;//very interesting functionality, goes to next i directly
        }
    }
    alert(i);//a prime
}
*/