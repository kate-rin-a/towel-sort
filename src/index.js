
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (matrix && matrix.length > 0) {
        for (let i = 0; i < matrix.length; i++) {
            let arr = [];
            if (i % 2 !== 0) {
              arr = matrix[i].reverse().slice();
            } else {
              arr = matrix[i].slice();
            }  
            for (let j = 0; j < arr.length; j++ ){
              result.push(arr[j]);
            }
        }  
    }

  return result;
}
