
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

const qsortPersonsByName = (personList) => {
  if (personList.length <= 1) {
    return personList
  }

  const pivot = personList[0]
  const pivotName = pivot.name.trim().toLowerCase()
  const left = []
  const rigth = []

  for (let i = 1; i < personList.length; i++) {
    const personName = personList[i].name.trim().toLowerCase()
    if (personName < pivotName) {
      left.push(personList[i])
    } else {
      rigth.push(personList[i])
    }
  }

  return [...qsortPersonsByName(left), pivot, ...qsortPersonsByName(rigth)]
}

const checkStarters = (starterCharacters, strToVerify) =>
  starterCharacters.some(schar => strToVerify.startsWith(schar))

const searchPerson = ({ ageStart = 20, ageEnd = 30, nameStartsWith = ['h', 'l'] } = {}) => {
  const personList = require('../persons.json')

  return personList.filter(person =>
    person.age >= ageStart &&
    person.age <= ageEnd &&
    checkStarters(nameStartsWith, person.name.toLowerCase())
  )
}

const decimal = n => parseInt(n, 10)

module.exports = {
  getNoAddressPersonList,
  qsortPersonsByName,
  searchPerson,
  decimal,
}
