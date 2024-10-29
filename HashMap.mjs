import Node from "./Node.mjs";
import LinkedList from "./LinkedList.mjs";
export default class {
    #buckets = [];
    #capacity = 16;
    #loadFactor = 0.75;
    #entries = 0;

    #hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
        }
        return hashCode;
    }
    set(key, value) {
        // if (this.#entries > (this.#capacity * this.#loadFactor))
        //     this.#capacity += 16;
        const bucketIndex = this.#hash(key);
        this.#buckets[bucketIndex] = (function(bucketsElement) {
            const bucket = bucketsElement;
            if (!bucket)
                return new LinkedList(new Node(key, value));
            else {
                bucket.add(new Node(key, value));
                return bucket;
            }
        })(this.#buckets[bucketIndex]);
        this.#entries++;
    }
    get(key) {
        if (this.has(key)) {
            const bucket = this.#buckets[this.#hash(key)];
            const value = bucket.get(key).value;
            return value;
        } else return null;
    }
    has(key) {
        const bucket = this.#buckets[this.#hash(key)];
        if (bucket && bucket.get(key) !== null) return true;
        else return false;
    }
    
    remove(key) {
        if (this.has(key)) {
            const bucket = this.#buckets[this.#hash(key)];
            bucket.delete(key);
            this.#entries--;
            return true;
        } else return false;
    }
    length() {
        return this.#entries;
    }
    clear() {
        this.#buckets.length = 0;
        this.#entries = 0;
    }
    keys() {
        const keys = [];
        this.#buckets.forEach((bucket) => {
            const bucketList = bucket.all();
            for (let node of bucketList) {
                keys.push(node.key);
            }
        });
        return keys;
    }
    values() {
        const values = [];
        this.#buckets.forEach((bucket) => {
            const bucketList = bucket.all();
            for (let node of bucketList) {
                values.push(node.value);
            }
        });
        return values;
    }
    entries() {
        const entries = [];
        this.#buckets.forEach((bucket) => {
            const bucketList = bucket.all();
            for (let node of bucketList) {
                entries.push([node.key, node.value]);
            }
        });
        return entries;
    }
}