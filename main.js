'use strict'
const lib = require('./lib')
const employee = lib.employee
const higherOrderUnderlings = lib.logUnderlingNames
const groupByManagerName = lib.groupByManagerName

const brad = employee('brad')

const frank = employee('frank', brad)
const peter = employee('peter', frank)
const michael = employee('michael', frank)
const dillon = employee('dillon', frank)

const ed = employee('ed', brad)
const mandy = employee('mandy', ed)
const chris = employee('chris', ed)

const employees = [
  brad,
  frank,
  ed,
  peter,
  michael,
  dillon,
  mandy,
  chris
]

// higherOrderUnderlings(brad, employees)
// higherOrderUnderlings(frank, employees)
// higherOrderUnderlings(ed, employees)

groupByManagerName(employees)
