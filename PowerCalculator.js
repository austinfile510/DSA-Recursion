const powerCalculator = function(base, exponent) {
	if (exponent === 1){
		return base;
	} else if (exponent <= 0) {
		console.log('Exponent should be >= 0');
    } else 
	return base * powerCalculator(base, (exponent - 1));
};

console.log(powerCalculator(10, 2))