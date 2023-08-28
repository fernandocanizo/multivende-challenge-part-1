const fv = require("fastest-validator");

const lib = require('./lib')

const validator = new fv({ haltOnFirstError: true });

const schema = {
  ageStart: {
  type: "number",
  positive: true,
  integer: true,
  min: 18, // TODO what's the minimum age to be able to buy stuff online?
  max: 125, // oldest person was 122 years
  },
  ageEnd: {
  type: "number",
  positive: true,
  integer: true,
  min: 18, // TODO what's the minimum age to be able to buy stuff online?
  max: 125, // oldest person in human history was 122 years
  },
  // TODO maybe there's no point in allowing the whole alphabet
  nameStartsWith: "string[]",
};

const check = validator.compile(schema)

const searchPerson = (req, res) => {
  const query = {
    ageStart: lib.decimal(req.query.ageStart),
    ageEnd: lib.decimal(req.query.ageEnd),
    nameStartsWith: req.query.nameStartsWith.split(','),
  }

	const queryCheck = check(query)

  if (typeof queryCheck !== 'boolean') {
		return res.status(400).json({
      // TODO fastest-validator returned array when validation fails is pretty
      // self explanatory, but maybe one should filter or compose a new error
      // message
			message: queryCheck,
		})
	}

  return res.json(lib.searchPerson(query))
}

module.exports = {
	searchPerson,
}
