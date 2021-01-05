function validateSnils(snils) {
    const result = {
        number: snils,
        message: ''
    }

	if (!snils.length) {
		result.message = 'SNILS is empty';
	} else if (/[^0-9]/.test(snils)) {
		result.message = 'SNILS should contain only numbers';
	} else if (snils.length !== 11) {
		result.message = 'SNILS should be 11 symbols long';
	} else {
		var sum = 0;
		for (var i = 0; i < 9; i++) {
			sum += parseInt(snils[i]) * (9 - i);
		}
		var checkDigit = 0;
		if (sum < 100) {
			checkDigit = sum;
		} else if (sum > 101) {
			checkDigit = parseInt(sum % 101);
			if (checkDigit === 100) {
				checkDigit = 0;
			}
		}
		if (checkDigit !== parseInt(snils.slice(-2))) {
			result.message = 'Wrong checksum';
		}
	}
	return result;
}

module.exports = { validateSnils }
