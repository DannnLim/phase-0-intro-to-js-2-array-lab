// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(Ralph) {
    cats.push(Ralph);
}

// console.log(cats.push())

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob);
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(Broom) {
    const appendCatCopy = [...cats, Broom]
    return appendCatCopy;
}
// console.log(appendCat());

function prependCat(Arnold) {
    const prependCatcopy = [Arnold, ...cats]
    return prependCatcopy;
}

// console.log(prependCat());

function removeLastCat() {
    const appendCatCopy = cats.slice(0, -1);
    return appendCatCopy;
}

// console.log(removeLastCat())

function removeFirstCat() {
    const appendCatCopy = cats.slice(1)
    return appendCatCopy;
}

console.log(removeFirstCat())
