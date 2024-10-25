export default class {
    #buckets = []
    #capacity = this.#buckets.length;
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
        this.#buckets[bucketIndex] = value;
    }
    get(key) {
        const bucketIndex = this.#hash(key);
        const value = this.#buckets[bucketIndex];
        if (value) return value;
        else return null;
    }
}