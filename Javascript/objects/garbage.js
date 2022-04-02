//garbage collector does not collect roots, such as the currently executed function, 
//other functions on the current chain of nested alls, their local variables and parameters
//global and other variables, reachable from a root by a reference / chain of references
/*
let user = {
    name: "John"
};

user = null; //the reference is now lost / put to garbage => "John" is now unreachable, memory is then freed

//in that case, the reference still exists, because there is one reference linked to the object
let user = {
    name: "John"
};
let admin = user;
user = null;//admin is still referenced, so the object is still REACHABLE via admin, which is btw global
//if admin is overwritten then the object is removed.
*/
//INTERLINKED OBJECTS
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,//the father property of object family (instantiated below) is the object man
        mother: woman//the mother property is the object woman
    }
}
let family = marry({//man is an object with the name property, woman same
    name: "John",
}, {
    name: "Ann"
});
//the 2 objects man and woman are linked by their properties, the memory structure is interlinked
//the family object is linked to the 2 objects father and mother, which are interconnected, one with
//the wife property, the other with the husband property

//if we remove some chosen references such as:
delete family.father;//we remove the reference from object to father, mother is kept
delete family.mother.husband;//we remove the reference from mother to father
//and although there is still a reference from father to mother (the wife link), there is no incoming reference anymore
//that means that the garbage collector can collect the object father. OUTGOING REFERENCES DO NOT MATTER

//It is also possible that a whole ISLAND of interlinked objects becomes unreachable and is then removed from the memory.
//in this case:
/*
delete family.father;
delete family.mother;
both objects father and mother are removed
*/
/*
How does the algorithm work?
The garbage collector first marks the roots (puts them to memory), then visits and marks reference from them
then visits marked objects and marks their references. Visited objects are remembered, so not to visit them twice
Until every object reachable from the roots has been visited.
The unreachable are collected first.
Then throughout the execution, the garbage collector will add and remove new references, objects, etc.
The algorithm can be optimized:
1- by distinguishing new and old objects. new usually die fast and are agressively visited, old are visited less often
2- if there are many objects, garbage is distributed into groups that are processed ine by one separately.
//It might take some time to track changes though with this method.
3- garbage collector works when CPU is idle.
*/
