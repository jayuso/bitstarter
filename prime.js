#!/usr/bin/env node
var fs = require('fs');
var outfile = "prime.txt";

function isPrime(number) {

	var _f;
	var _c;

	var _div = 2;
	while (_div<number) {
		_f = Math.floor(number/_div);
		_c = Math.ceil(number/_div);
		if (_f!=_c) {
			//ok, number can be prime, we continue
			_div++;
		} else {
			return false;
		}
	}
	return true;
}


var _number = 2;
var i=0;
var _out = "";
for (i=0;i<100;i++) {
	while (!isPrime(_number)) {
		_number++;
	}
	if (i==0) {
		_out = _number;
	} else {
		_out = _out+","+_number;
	}
	console.log(i+"- "+_number);
	_number++;
}

fs.writeFileSync(outfile, _out);  
console.log("Script: " + __filename + "\nWrote: " + _out + "To: " + outfile);
