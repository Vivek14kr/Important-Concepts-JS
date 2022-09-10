THROTTLING

const throttle = (func, limit) => {
  let flag = true;
  return function () {
    if (flag == true) {
      func();
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
};



DEBOUNCING

let count = 0;

function getData(){
    console.log("Count: ", count++)
}

const debounce = function (fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFunction = debounce(getData, 300)

let count = 0
const getData = () =>{
    //calls an api and get data

    console.log("fetching data " + count++)
}

const doSomeMagic = function(fn, delay){
    let timer;
    return function(){
        clearTimeout(timer);
      timer =setTimeout(()=>{
        fn()
      },delay)
    }
}

const doSomeMagic = function (fn, delay){
    let timer;
    return function(){

        clearTimeout(timer);

     timer = setTimeout(()=>{
        fn()
      }, delay)
    }
}

const betterFunction = doSomeMagic(getData, 300);

Interview Question

for (let i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged?
  }, 1000);
 }

for (var i = 0; i < 3; i++) {
     console.log(i); // What is logged?
   }

function d (){
   3 == '3' ? console.log(true) : console.log(false)
}

let arr = [1,2,4, 5, 6,7,8,9,10];
console.log(ans(arr));

function ans(arr) {
  let l = 0;
  let h = arr.length - 1;

  while (l <= h) {
    let mid = l + Math.floor((h - l) / 2);

    if (arr[mid] > mid + 1 && arr[mid - 1] == mid + 1) {

      h = mid - 1;
    } else if (arr[mid] == mid + 1) {
      l = mid + 1;
    } else if (arr[mid] != mid + 1) {
      return mid + 1;
    }
  }
}

let user = {d : 3}
let z = user?.d ?? 1

let s = async () => {
  setTimeout(() => console.log(1), 5000);
  setTimeout(() => console.log(2), 4000);
  setTimeout(() => console.log(3), 12000);
  setTimeout(() => console.log(5), 0);
  console.log(4);
};

s()

fetchdata();

Function fetchdata(){
   fetch(“www.google..com”).then((res)=>{
  res.json();
}.then((res)=> console.log(res)).catch((Err) =>{
  Throw error.
}
}

Let k = [1,2,3,4,5,6];
Let target = 4;

BinarySearch(k, target)

Function BinarySearch(k, target{

   Let low = 0;
  Let high = k.length - 1;

While (low < high){
  Let mid = low + math.floor(high - low)/2;

  If (arr[mid[ == target){
    return true;
}
  If (arr[mid] < target){
   Low = mid + 1;
}
If (arr[mid] > target){
   High = mid -1;
}
}

}

Let n = 0
Let arr = [1,3,4,5,6, 7]
