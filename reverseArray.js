// Write a function reverseArray(A) that takes in an array A and reverses it,
// without using another array or collection data structure; in-place.
// Example:
// A = [10, 5, 6, 9] 
// reverseArray(A) A // [9, 6, 5, 10]

const reverseArray = function(A) {
    // loop over the length of the given array A
    for (let i = 0; i < Math.floor(A.length/2); i++) {
    // swap the elements with array destructuring
    [A[i], A[A.length-1-i]] = [A[A.length-1-i], A[i]]       
    }
    return A;
};
reverseArray([10, 5, 6, 9]);