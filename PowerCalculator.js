const powerCalculator = function (base, exponent) {
	if (exponent <= 0) {
		console.log('Exponent should be >= 0');
    }
    total = base ** exponent
	return powerCalculator(total);
};
