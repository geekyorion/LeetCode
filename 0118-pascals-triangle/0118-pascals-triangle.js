/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
    if (numRows === 1) return [ [1] ];
    if (numRows === 2) return [ [1], [1, 1] ];

    const triangle = [ [1], [1, 1] ];
    for (let i = 3; i <= numRows; i++) {
        const row = [1];
        let j = 1;
        for (; j < ~~((i + 1) / 2); j++) {
            row.push(triangle[i - 2][j - 1] + triangle[i - 2][j]);
        }
        for (; j < i; j++) {
            row.push(row[i - j - 1]);
        }
        triangle.push(row);
    }
    
    return triangle;
};
