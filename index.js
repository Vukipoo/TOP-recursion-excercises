

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



    //recursive merge sort

    function mergeSort(arr) {

            if(arr.length <= 1){
                return arr
            }

            const middle = Math.floor(arr.length / 2)
            const left = arr.slice(0, middle)
            const right = arr.slice(middle)

            return merge(mergeSort(left), mergeSort(right))

      }
        

      function merge(left, right) {
        const arr = []

        while(left.length && right.length) {
            if (left[0] < right[0]){
               arr.push(left.shift())
            }
            else{
                arr.push(right.shift())
            }
        }

        return arr.concat(left.concat(right))


      }


      const arr1 = [1, 2, 4, 2, 7, 4, 2]
      const arr2 = [1, 3, 4, 2, 3, 2, 2]
      const arr3 = [1, 123, 4, 2, 7, 4, 2]
      const arr4 = [1, 346, 4, 4, 8, 1, 1]


      console.log(mergeSort(arr1))
      console.log(mergeSort(arr2))
      console.log(mergeSort(arr3))
      console.log(mergeSort(arr4))

    



