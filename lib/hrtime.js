"use strict";

module.exports = class HrTime {
    constructor(time) {
        this._stime = time ? time : process.hrtime();
    }

    get diff() {
        return process.hrtime(this._stime);
    }

    get text() {
        const t = this.diff;
        let ns = t[1].toString(10);
        return t[0].toString(10) + '.' + ('0'.repeat(9 - ns.length) + ns).slice(0, 6);

    }

    get time() {
        return Number(this.text);
    }

    set time(t) {
        this._stime = t || process.hrtime();
    }
}

