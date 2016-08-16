function employee (name, manager) {
  return {
    name,
    manager,
    toString: function () {
      return this.name
    }
  }
}

/**
 * Returns an array of employees (chosen from the given array of employees)
 * whose manager is the same as the given manager. This should not alter
 * the given array! A new array should be created to contain the results.
 *
 * @param manager the manager to filter by
 * @param employees the employees to choose from
 */

function logUnderlingNames (manager, employees) {
  employees
    .filter(function (e) {
      return e.manager === manager
    })
    .map(function (e) {
      return e.name
    })
    .forEach(function (n) {
      console.log(n)
    })
}



function groupByManagerName (employees) {
  const boss = {}
  employees
  .filter(e => e.manager !== undefined)
  .forEach(n => boss[n.manager.name] = employees.filter(e => e.manager === n.manager))

  console.log(boss)
}

//
//
// function higherOrderUnderlings(manager,employees){
//   function hasManager (employee) {
//     return employee.manager === manager
//   }
//   return employees.filter(hasManager)
// }
//
//
// function higherOrderNames(employees){
//   function getName(employee){
//     return employee.name
//   }
// return employees.map(getName)
//   }
//
// function higherOrderLog (names) {
//     function logName (name) {
//       console.log(name)
//     }
//     names.forEach(logName)
// }
//
//
//  //filtering
// function underlings (manager, employees) {
//   const returnArray = []
//
//   function hasManager(employee){
//     return employee.manager===manager
//   }
//
//   for (let i = 0; i < employees.length; ++i) {
//     if (hasManager(employees[i])) {
//       returnArray.push(employees[i])
//     }
//   }
//   return returnArray
// }
// //mapping / transforming
// function names(employees){
//   const result = []
//   for (let employee of employees){
//     result.push(employee.name)
//   }
//   return result
// }
// //foreach
// function log (names) {
//   for (let name of names) {
//     console.log(name)
//   }
// }

module.exports = {
  employee,
  logUnderlingNames,
  groupByManagerName
}
