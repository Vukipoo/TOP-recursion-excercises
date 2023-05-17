

// non recursive fibonacci sequence
    function fibs(n) {
        const arr = [0, 1]
        for(let i = 2; i < n; i++){
            arr[i] = arr[i - 1] + arr[i - 2]
        }
        return arr

    }

    console.log(fibs(8))



    //solve recursively

    function fibsRec(num) {
        if(num < 2){
            return num
        }
        else{
           return  (fibsRec(num-1) + fibsRec(num - 2))
        }
    }

    console.log(fibsRec(7)) // returns 13

