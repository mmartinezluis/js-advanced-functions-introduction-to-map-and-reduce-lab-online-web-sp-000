// Your code here
function mapToNegativize(array) {
    let newArray = [];
    array.forEach(element => newArray.push(-1*element));
    return newArray;
}

function mapToNoChange(array) {
    return array.slice();
}

function mapToDouble(array) {
    let newArray = [];
    array.forEach(function(element) {
        newArray.push(2*element);
    });
    return newArray;
}

function mapToSquare(array) {
    let newArray = [];
    for(let i=0; i< array.length; i++) {
        newArray.push((array[i])**2);
    };
    return newArray;
}

function reduceToTotal(array, startingPoint = 0) {
  let total = 0;
  array.forEach( e => total = total + e);
  return total + startingPoint;
}

function reduceToAllTrue(array) {
  let newArray = [];
  array.forEach( e => newArray.push(!!e));
  return !newArray.includes(false);
};
  
function reduceToAnyTrue(array){
  let newArray = [];
  array.forEach( e => newArray.push(!!e));
  return newArray.includes(true);
};
