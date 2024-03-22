//1.create original array cat
const cats = ["Milo", "Otis", "Garfield"];
console.log(cats);

//2.adds cat Ralph to the end of the array
function destructivelyAppendCat() {
  cats.push("Ralph");
  console.log(cats);
}
destructivelyAppendCat();

//3.adds bob element to the start of the array
function destructivelyPrependCat(name) {
  cats.unshift("Bob");
  console.log(cats);
}
destructivelyPrependCat();

//4.removes the last element garfield from the array
function destructivelyRemoveLastCat() {
  cats.pop();
  console.log(cats);
}
destructivelyRemoveLastCat();
//5.removes the first element from the array
function destructivelyRemoveFirstCat() {
  cats.shift();
  console.log(cats);
}
destructivelyRemoveFirstCat();

//6.adds a new cat element to a new array with the original cats array using spread operator
function appendCat(name) {
  const updatedCats = [...cats, "Broom"];
  return updatedCats;
}
console.log(appendCat());

//7.prepends cat element without changing status of original cat array
function prependCat() {
  const copyCats = ["Arnold", ...cats];
  return copyCats;
}
console.log(prependCat());

///8.removes the last cat element and returns new array without affecting cats array
function removeLastCat() {
  const rejectedCats = cats.slice(0, -1);
  return rejectedCats;
}
console.log(removeLastCat());

//9.removes the first cat from cats array and returns new array without affecting cats array
function removeFirstCat() {
  const modifiedCats = cats.slice(1);
  return modifiedCats;
}
console.log(removeFirstCat());
