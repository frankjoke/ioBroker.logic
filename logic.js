"use strict";

const A = require("./fjadapter-core");

A.init(module, "logic", main);

A.If("This is a test");

function main(adapter) {

	A.If("test! %j", adapter);

}