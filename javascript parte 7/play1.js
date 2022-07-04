function validaArrays(art, num) {
	try {
		if (!art && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof art !== 'object')
			throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number')
			throw new TypeError('Envie um elemento do tipo Number!');

		if (art.length !== num) throw new RangeError('Tamanho do array inválido!');

		return art;
	} catch (e) {
		if (e instanceof RangeError) {
			console.log('RangeError!');
			console.log(e.message);
		} else if (e instanceof ReferenceError) {
			console.log('ReferenceError!');
			console.log(e.message);
		} else {
			console.log('Outro tipo de erro!');
			console.log(e.menssage);
		}
	}
}

console.log(validaArrays([1,2,3], 3));