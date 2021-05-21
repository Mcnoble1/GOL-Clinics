// Write a function reverseSentence(A) that takes in an array of characters, A, 
// and reverses the the "words" (not individual characters).
// Example:
// A = ['t','h','i','s',' ','i','s',' ','g','o','o','d'] 
// reverseSentence(A) A // ['g','o','o','d',' ','i','s',' ','t','h','i','s']

function reverseA(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

function reverseSentence(sent) {
    console.log(reverseA(sent, 0, sent.length - 1));
   let start = 0;
   let end = 0;
   while(start < sent.length) {
    //    seeking the end word
    while (end < sent.length && sent[end] != '') {
      end++;  
    }
    reverseA(sent, start, end);
    start = end + 1;
   }   
   return sent
}
 
console.log(reverseSentence(['t','h','i','s',' ','i','s',' ','g','o','o','d']));