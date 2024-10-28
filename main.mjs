import HashMap from "./HashMap.mjs";

const hashMap = new HashMap();

hashMap.set('apple', 'red');
hashMap.set('banana', 'yellow');
hashMap.set('carrot', 'orange');
hashMap.set('dog', 'brown');
hashMap.set('elephant', 'gray');
hashMap.set('frog', 'green');
hashMap.set('grape', 'purple');
hashMap.set('hat', 'black');
hashMap.set('ice cream', 'white');
hashMap.set('jacket', 'blue');
hashMap.set('kite', 'pink');
hashMap.set('lion', 'golden');

console.log(hashMap.get('apple'));
console.log(hashMap.get('banana'));
console.log(hashMap.get('carrot'));
console.log(hashMap.get('dog'));
console.log(hashMap.get('elephant'));
console.log(hashMap.get('frog'));
console.log(hashMap.get('grape'));
console.log(hashMap.get('hat'));
console.log(hashMap.get('ice cream'));
console.log(hashMap.get('jacket'));
console.log(hashMap.get('kite'));
console.log(hashMap.get('lion'));

// console.log(hashMap.length());