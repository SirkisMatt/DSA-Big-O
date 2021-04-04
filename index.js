// What is the Big O for this?
// 1.) O(1)Constant 
// 2.) O(n) Linear Time

// 2. Even or odd
// O(1) constant cause the complexity and the time it takes to complete the function does not grow the bigger the value.
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isEven(4))

// 3. Are you here?
// Polynomial time O(n^k) because there are nested loops
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}

// 4. Doubler
// O(n) Linear because as the input grows so does the time it takes for the function to loop through the array
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}

// 5. Naive search
// O(n) Linear because as the input grows so does the time it takes for the function to loop through the array
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}

// 6. Creating pairs:
// Polynomial time O(n^k) because there are nested loops
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}


// 7. Compute the sequence
// returns the fibonacci sequence and its O(n) Linear because as the input grows so does the time it takes for the function to loop through the array

function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}

// 8. An efficient search
//  Logarithmic time O(log(n)) You cut the search time by finding if the item is greater than or less than the value of the midindex. As the input gets larger the runtime complexity does not scale to quickly.
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}


// 9. Random element
// O(1) constant cause the complexity and the time it takes to complete the function does not grow the bigger the value.
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// 10. What Am I?
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isWhat())

// 11. Tower of Hanoi
// Exponential time O(2^n)
resolver_tower_of_hanoi = function (s, e, m, n) {

    // terminating condition
    if (n <= 0) {
        return
    }

    resolver_tower_of_hanoi(s, m, e, n - 1)

    console.log(`Move Disk-${n} FROM ${s} TO ${e}`);

    resolver_tower_of_hanoi(m, e, s, n - 1);
}

resolver_tower_of_hanoi('s', 'e', 'm', 10)