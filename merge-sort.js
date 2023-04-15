
function mergeSortRec(array){
    if(array.length < 2) return array;

    const middle = Math.floor(array.length/2)
    
    let leftArray = array.slice(0,middle);
    let rightArray = array.slice(middle);


    return merge(mergeSortRec(leftArray),mergeSortRec(rightArray))
}


function merge(leftArray, rightArray){
    let result =[];
    let indexLeft = 0;
    let indexRight = 0;
    


    while(indexLeft<leftArray.length && indexRight<rightArray.length){
        if(leftArray[indexLeft]<rightArray[indexRight]){
            result.push(leftArray[indexLeft]);
            indexLeft++;
        }else{
            result.push(rightArray[indexRight]);
            indexRight++;
        }
    }

    while(indexLeft<leftArray.length){
        result.push(leftArray[indexLeft])
        indexLeft++
    }

    while(indexRight<rightArray.length){
        result.push(rightArray[indexRight])
        indexRight++
    }

    return result
}


myArray = [10,21,32,3,4,5]

console.log(mergeSortRec(myArray))