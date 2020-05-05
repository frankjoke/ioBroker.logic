"use strict";

const A = require("./fjadapter-core");

A.init(module, "logic", main);

A.If("This is a test");

function main(adapter) {

	function p(o, k,v) {
		A.If("%s '%s' = %j", o, k, typeof v == "function" ? v.toString() : v);
	}

	A.If("test! %j", adapter);
	for (const [k, v] of Object.entries(adapter)) p("Adapter", k,v);
	A.If("adapter.log");
	for (const [k, v] of Object.entries(adapter.log)) p("Adapter.log", k,v);
	A.If("adapter.log.logger");
	for (const [k, v] of Object.entries(adapter.log.logger)) p("Adapter.log.logger", k,v);
	
}