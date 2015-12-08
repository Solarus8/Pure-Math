/**
 * Created by Jonathan Christopher Voelm on 12/2/15.
 * Conjunctive Combinatorial Set Theory
 *
 * Copy Right Jonathan Voelm 12-2-15.
 */

//Updated 12-5-15

/**** Hand Calculated Pattern of the Set Theory ****
 *
 *
 *
 ****  START OF THEORY  ********************************************************************************************************************************************************
 *
 *
 *

-------------------------------------------------------------------------------------------
* ZERO

 Meaning =  Earth, Origin, Empty Set, Sub-strait, Infinite Map  ==> time  ==> Hierarchical Symmetry
 The Sphere


 0 =               [ { } ]  -->  1 first order & fundamental element --> [{infinite_symbol}, {InfSym}, {InfSym}, ...]  --> which is the set of all infinite sets, Hierarchically ordered
 #expansion#          |     ==>  1 root element

 1 root point node  -->  Total number of elements, recursive counting of all {} sets contained in fundamental number 0

 F_Conj_additive_single_decimal_compression_map(0) = 1


-------------------------------------------------------------------------------------------------------------------------
* ONE

Meaning =  Air, Magnitude, Scalar Vector, 1D line, force, initiation, energy


1 =             [  {(0, 1)  *2}   ,     {1 , 1} ]   -->  2 first order elements
#expansion#         /  /|   *2   &;     /|   /|
#expansion#      ({}+{}+{}) *2   &;  ({}+{}+{}+{})
                        3    *2    +         4      ==>  10 root elements


10 root nodes  -->  Total number of end point elements, recursive counting of all {}  sets contained in fundamental number 1

F_Conj_additive_single_decimal_compression_map(1) = 1


-------------------------------------------------------------------------------------------------------------------------
* TWO

 Meaning = Water, Space Manifest in 2D Shape, Triangle, Anaerobic Life, Light Cone
 The Cube


 2 =             [ {(0, 2) *2} ,   {1,1}   ,  {(1, 2) *2}     ]   -->  3 first order elements
 #expansion#         /  /|| *2  &;  /| /|  &;   /| /|| *2
 #expansion#             8       +    4     +      10        ==> 22 root elements


 22 root nodes  -->  Total number of elements, recursive counting of all {} sets contained in fundamental number 2

 F_Conj_additive_single_decimal_compression_map(2) = 4


---------------------------------------------------------------------------------------------------------------------------
* THREE

Meaning = Air, Manifest in 3D Solid, Tetrahedron, Energy, Foundation, Aerobic Life ==> Spacial Field
The Octahedron


3 =            [ {(0,  3 ) *2}  ,   {(1, 2) *2}   ,   {(3 ,   1)* 2}   ,  {1, 1, 1} ]   -->  4 first order elements
#expansion#       /  //||  *2  &;    /| /|| *2   &;    //||  /| * 2   &;  /| /| /|
#expansion#          10         +       10        +        12         +      6       ==>  38 root elements


38 root nodes   -->  Total number of elements, recursive counting of all {} sets contained in fundamental number 3

F_Conj_additive_single_decimal_compression_map(3) = 2


-----------------------------------------------------------------------------------------------------------------------------------------------------------
*  FOUR

 Meaning = Consciousness, Magic of Form,  (Foundation + Trinity)  ==> Spirit and Matter United
 The Dodecahedron


 4 =            [ {(0,  4    )*2} ,  {  (1,    4)    *2}  ,   { (2,   2)   *2} ,    {(  3  , 1) *2}  ,  { (2   ,1  ,1)*10}   ,  {1 ,1 ,1 ,1}  ,   {(  4,     1, 1, 1) *4} ]  -->  7 first order elements
 #expansion#       /  ///|||| *2 &;     /|  ///||||  *2  &;    //||  //||  *2 &;      //||   /| *2  &;   //||  /|  /|  *10  &;  /| /| /| /|  &;    ///||||  /| /| /|  *4
 #expansion#            16        +        18             +       16           +          12        +           80           +       8        +           52          ==>  202 root elements


 202 root nodes   -->  Total number of elements, recursive counting of all {} sets contained in fundamental number 4

 F_Conj_additive_single_decimal_compression_map(4) = 4

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*  FIVE

Meaning = Synthesis, Power Step, Completion into Hierarchical Recursion Manifest, Meta-verse - Symmetry point for local Universal time-space-energy
The Icosahedron   -->  The last perfect geometric solid


5 = [ {(0,5)*2}, {(1,4)*2}, {(2,3)*2}, {(1,5)*2}, {(2,3)*2}, {(1,2,2)*3}, {(1,3,1)*3}, {(1,1,1,2)*4}, {(1,1,1,1,1)} ]  ---> 7 first order elements   ///  THE SAME AS FOUR!!!!!!


 //<need to calculate root nodes> -->  Total number of elements, recursive counting of all {} sets contained in fundamental number 5

 //F_Conj_additive_single_decimal_compression_map(5) = <need to calculate based on # of root nodes>


 -------------------------------------------------------------------------------------------
 *  SIX

 6 = [ {(0,6)*2},  {(1,5)*2}, {(2,4)*2}, {(3,3)}, {(1,6)*2}, {(2,3)*2} ] ---> 6 first order elements   ///   A SELF MAP.....





 *
 *
 *
 *****   START OF COMPUTATION SCRIPT    ******************************************************************************************************************************************
 *
 *
 *
 */

// Function to output calculations
function Cset_internal_Nums_Calc(cal_real_decimal_set_character) {

// initialize the array for zero which is the null set and counts as a 1 element set
    var Conjunctive_Array =[0];

//  Define the passed in variable as the fundamental decimal number to compute it's set characteristics
    var in_dec_num = cal_real_decimal_set_character;

    if (in_dec_num == 0) {
        //  Print out the input
        console.log("For Numberal: ");
        console.log(in_dec_num);
        console.log("\r");

        //  Print out the array
        console.log("The Array Looks like: ");
        Conjunctive_Arrar = [];
        console.log(Conjunctive_Array);
        console.log("\r");

        //  Print 1st order element count in the Set for input decimal number
        primary_elements = 1;
        console.log("The 1st order elements count =  ");
        console.log(primary_elements);
        console.log("\r");
    }

    if (in_dec_num == 1) {
        Conjunctive_Array = [[[1,0],2], [1,1]];
    }

//  Print out the input
    console.log("For Numberal: ");
    console.log(in_dec_num);
    console.log("\r");

//  Print out the array
    console.log("The Array Looks like: ");
    console.log(Conjunctive_Array);
    console.log("\r");

//  Print 1st order element count in the Set for input decimal number
    primary_elements = Conjunctive_Array.length;
    console.log("The 1st order elements count =  ");
    console.log(primary_elements);
    console.log("\r");

// Print out root nodes number ----   for 1 this should be 10
    var count = 0;  //Initialize count of root nodes at 0
    for (var i = 0; i<=Conjunctive_Array.length; i++) {
        if (Conjunctive_Array[i].length == 1) {
            count = count++;
        }
        else if (Conjunctive_Array[i].length >=1) {
            var index_offset =Conjunctive_Array[i++];
            count = count++;
        }
    };
        console.log("The root node element count = ");
        console.log(count);
        console.log("");;
}

/*    Make a recursion function to calaculate out need first order elements.

      Have that function pust the results into a 2D array that will hold the map value for the set.

      This Array will be use to speed up calculaton by using a stack and iterate method.

      So -- Let's try spliting up the work...........   :)   :)    :)
 *
 *
 *
 * */




//Test the function with a call
Cset_internal_Nums_Calc(2);