
const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function () {
	
	it('Si la palabra termina en "ar", se le quitan esos dos parámetros', function () {
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})

	it('Si la palabra inicia con Z, se le añade "pe" al final', function () {
		const translation1 = platzom("Zorro")
		const translation2 = platzom("Zarpar")
		expect(translation1).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})

	it('Si la palabra tiene 10 o más letra se debe partir a la mitad y unir con un guión en el medio', function () {
		const translation = platzom("abecedario")
		expect(translation).to.equal("abece-dario")
	})

	it('Si la palabra es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercambiando mayúsculas y minúsculas', function () {
		const translation = platzom("sometemos")
		expect(translation).to.equal("SoMeTeMoS")
	})

})