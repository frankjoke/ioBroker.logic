"use strict";

module.exports = class CacheP {
    constructor(fun, delay) { // neue EintrÃ¤ge werden mit dieser Funktion kreiert
        if (typeof fun != "function")
            throw "CacheP needs an async function returning a Promise as first argument!";
        this._cache = {};
        this._fun = fun;
        this._delay = delay || 0;
        return this;
    }

    async cacheItem(item, prefereCache=true, fun) {
        fun = fun || this._fun;
        if (this._delay)
            await new Promise(res => setTimeout(() => res(), this._delay));
        if (prefereCache && this._cache[item] !== undefined)
            return this._cache[item];
        if (!fun)
            fun = this._fun;
        // assert(A.T(fun) === 'function', `checkItem needs a function to fill cache!`);
        const res = await fun(item);
        this._cache[item] = res;
        return res;
    }

    isCached(x) {
        return this._cache[x] !== undefined;
    }
    clearCache() {
        this._cache = {};
    }
    get cache() {
        return this._cache;
    }
}
