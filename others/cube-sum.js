
function cubeSum(n, operations) {
  // Write your code here
  // console.log(n)
  // console.log(operations)
  let results = [];
  let matrix = []
  for (let i = 1; i <= n; i++) {
      let rows = []
      for (let j = 1; j <= n; j++) {
          let row = []
          for (let k = 1; k <= n; k++) {
              row.push(0)
          }
          rows.push(row)
      }
      matrix.push(rows)
  }
  // console.log(matrix)

  for (let operation of operations) {
      let tokens = operation.split(" ");
      // console.log(tokens)
      switch (tokens[0]) {
          case "UPDATE":
              matrix[parseInt(tokens[1]) - 1][parseInt(tokens[2]) - 1][parseInt(tokens[3]) - 1] = parseInt(tokens[4]);
              break;
          case "QUERY":
              let result = 0;

              for (let i = 0; i < n; i++) {
                  for (let j = 0; j < n; j++) {
                      for (let k = 0; k < n; k++) {
                          let cond1 = i + 1 >= parseInt(tokens[1]) && i + 1 <= parseInt(tokens[4]);
                          let cond2 = j + 1 >= parseInt(tokens[2]) && j + 1 <= parseInt(tokens[5]);
                          let cond3 = k + 1 >= parseInt(tokens[3]) && i + 1 <= parseInt(tokens[6]);
                          
                          if (cond1 && cond2 && cond3) {
                              result = result + matrix[i][j][k];
                          }
                      }
                  }
              }

              results.push(result);
              break;
          default:
              break;
      }
  }
  // console.log(
  //     "after"
  // )
  // console.log(matrix)

  return results;
}
