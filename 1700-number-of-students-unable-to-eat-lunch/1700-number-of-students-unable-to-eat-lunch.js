/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
const countStudents = (students, sandwiches) => {
    let j = 0, i = 0, last = -1;
    const n = students.length;
    while (i !== last) {
        if (students[i] === null) {
            // do nothing
        } else if (students[i] === sandwiches[j]) {
            j++;
            last = i;
            students[i] = null;
        }
        if (i === n - 1 && last === -1) {
            last = i;
        }
        i = (i + 1) % n;
    }
    return n - j;
};
