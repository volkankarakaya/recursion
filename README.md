# recursion


## Pseudo Code For Sorting
if n<2 
    return
else 
    sort left half of elements
    sort right half of elements
    merge sorted half


## Pseudo Code For Merging

WHILE left index < left array length AND right index < right array length
    IF current item of left < current item of right
    ADD left to result
    increase left index
    ELSE
    ADD right to the result

WHILE   left index < left array length
    ADD current item to result array
    increase left index

WHILE   right index < right array length
    ADD current item to results array
    increase right index



