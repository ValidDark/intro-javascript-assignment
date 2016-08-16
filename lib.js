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

module.exports = {
  employee,
  logUnderlingNames,
  groupByManagerName
}
