export default class {
    #buckets = [];
    #capacity = 16;
    #loadFactor = 0.75;
    #entries = 0;

    #hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.#capacity;
    }
    set(key, value) {
        if (this.#entries > (this.#capacity * this.#loadFactor))
            this.#capacity += 16;

        const bucketIndex = this.#hash(key);
        this.#buckets[bucketIndex] = [key, value];
        this.#entries++;
    }
    get(key) {
        if (this.has(key)) {
            const bucketIndex = this.#hash(key);
            const value = this.#buckets[bucketIndex][1];
            return value;
        } else return null;
    }
    has(key) {
        const bucketIndex = this.#hash(key);
        const bucket = this.#buckets[bucketIndex];
        if (bucket) return true;
        else return false;
    }
    
    remove(key) {
        if (this.has(key)) {
            const hash = this.#hash(key);

            this.#buckets.forEach((value, index, array) => {
                if(index === hash) delete array[index];
            })
            
            this.#entries--;
            return true;
        }
        else return false;
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
        this.#buckets.forEach((value) => {
            keys.push(value[0]);
        });
        return keys;
    }
    values() {
        const values = [];
        this.#buckets.forEach((value) => {
            values.push(value[1]);
        });
        return values;
    }
    entries() {
        const entries = [];
        this.#buckets.forEach((value) => {
            entries.push(value);
        });
        return entries;
    }
}