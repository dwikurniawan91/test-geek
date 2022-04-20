const fishBash = (num) => {
    for(let i=0; i <= num; i++) {
      if(i % 3 === 0){
        console.log('fish')
      }  
       if(i % 5 === 0) {
         console.log('bash')
      }
       if(i % 15 === 0) {
      console.log('fish bash')
      }
    }
  }
  
  console.log(fishBash(15))
  console.log(fishBash([1,2,5,10,15,30,50]))


  
const sort = (sortType, arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    if (sortType === "ascending") {
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
    }
    if (sortType === "descending") {
      while (j >= 0 && arr[j] < current) {
        arr[j + 1] = arr[j];
        j--;
      }
    }

    arr[j + 1] = current;
  }
  return arr;
};

console.log(sort("ascending", [10, 2, 3, 4, 90, 6, 7, 8, 9, 89]));
console.log(sort("descending", [10, 2, 3, 4, 90, 6, 7, 8, 9, 89]));




const palindrome = (word) => {
    return word === word.split("").reverse().join("");
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true