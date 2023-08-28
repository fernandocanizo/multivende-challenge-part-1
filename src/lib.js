
const getNoAddressPersonList = () => {
	const personList = require('../persons.json')
	
	// don't use Array.filter cause it produces a shallow copy (copy by reference)
	const noAddressPersonList = []

	personList.forEach(person => {
		if (person.address === null || person.address === undefined || person.address?.length === 0) {
			noAddressPersonList.push(structuredClone(person))
		}
	})

	return noAddressPersonList
}

module.exports = {
	getNoAddressPersonList,
}
