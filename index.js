// (function foo(i) {

//     if (i == 3) {     
//         return;
//     } else {
//         debugger;
//         foo(++i)
//     }
// })(0)


function foo(i) {

    if (i == 3) {     
        return;
    } else {
        debugger;
        foo(++i)
    }
}

foo(0)
