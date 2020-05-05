"use strict";

module.exports = class Sequence {
    constructor(p, delay) {
        this._p = p ? p : Promise.resolve();
        this._delay = delay || 0;
        return this;
    }
    get p() {
        return this._p;
    }
    set p(val) {
        this.add(val);
        return val;
    }

    add(val, ...args) {
        let fun = typeof val === 'function' ? val : () => val;
        if (this._delay) {
            const n = () => new Promise(res => setTimeout(() => res(), this._delay)); 
            this._p = this._p.then(() => n(), () => n());
        }
        this._p = this._p.then(() => fun(...args), () => fun(...args));
        return this;
    }

    async then(res, rej) {
        return this._p = this._p.then(res, rej);
    }

    async catch(rej) {
        return this._p = this._p.then(x => x, rej);
    }

}
