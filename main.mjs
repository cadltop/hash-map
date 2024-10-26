import HashMap from "./HashMap.mjs";

const hashMap = new HashMap();

hashMap.set("cars", "fulo");

//console.log(hashMap.get("cars"));
///console.log(hashMap.get("bikes"));

//console.log(hashMap.has("cars"));

//console.log(hashMap.remove("bikes"));
hashMap.set("cars1", "tintan");
// hashMap.clear();

console.log(hashMap.remove("cars1"));
console.log(hashMap.get("cars"));
console.log(hashMap.get("cars1"));