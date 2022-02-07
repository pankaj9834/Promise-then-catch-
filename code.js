function Func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log(" function1: your promise has been resolved ")
                resolve()
            } else {
                console.log("your promise has been denied")
                reject('Sorry not fulfilled')
            }

        }, 3000);
    })
}
Func1().then(function() {
    console.log("harry: Thanks for resolving")
}).catch(function() {
    console.log("harry:very bad bro")
})