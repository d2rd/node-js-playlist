//function expression
var byeAgain = '...';
var sayBye = function() {
    console.log('bye');
};

var time = 0;
setInterval(function() {
    time += 1;
    //    console.log('sayBye is running. ' + time + ' seconds have passed');
    // console.log(time + ' seconds have passed');  
    //   console.log(time); // shows only the seconds passing;
    //    sayBye();
    if (time > 1) {

        console.log('bye' +
            byeAgain);
        byeAgain = byeAgain + '..';
    }
}, 500); // this number controls the cycle speed
if (time > 12) {
    return ("I'm gone");
}