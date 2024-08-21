// class Calculator{
//     add(a,b){
//         return a+b;
//     }

//     Multiply(a,b){
//         return a*b;
//     }

//     divide(a,b){
//         return a/b;
//     }
// }

// module.exports=Calculator;

//immediatly assign the value
module.exports=class{
    add(a,b){
        return a+b;
    }

    Multiply(a,b){
        return a*b;
    }

    divide(a,b){
        return a/b;
    }
}
