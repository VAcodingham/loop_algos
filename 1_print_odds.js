//Print out only odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var num = 0;
for(i = 0; i <= 20; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
