import HashMap from "./HashMap.mjs";

const hashMap = new HashMap();
hashMap.bucket.length = 16;

console.log(hashMap.hash("1zxcvxzcv"));
console.log(hashMap.hash("1eqrupr"));

