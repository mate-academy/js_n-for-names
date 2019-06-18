'use strict';

/**
 * Implement nIsForName function:
 *
 * You are given an array of full names of several people. Return an array that
 * contains only those of the given names that satisfy the property: at least
 * one part of the name starts with the letter N. If nobody has N at the start
 * of the name return an empty array.
 *
 * For example, if the array
 * ['Harrison Ford', 'Robert De Niro', 'Morgan Freeman', 'Matt Damon',
 * 'Christofer Nolan', 'Natalie Portman', 'Martin Scorsese' , 'Nick Nolte']
 * is given, you must return
 * ['Robert De Niro', 'Christofer Nolan', 'Natalie Portman', 'Nick Nolte'].
 *
 * You are encouraged to use the `filter` and `some` array methods to solve this
 * problem. Please do not use `for` or any other kind of loop.
 *
 * @param {string[]} names
 *
 * @return {string[]}
 */
function nIsForName(names) {
  const filterFunc = (item) => {
    const actor = item.split(' ');
    let firstCharacterName;
    let firstCharacterMiddleName;
    let firstCharacterLastName;
    if (actor.length !== 3) {
      firstCharacterName = actor[0][0].toLowerCase();
      firstCharacterLastName = actor[1][0].toLowerCase();
    } else {
      firstCharacterName = actor[0][0].toLowerCase();
      firstCharacterMiddleName = actor[1][0].toLowerCase();
      firstCharacterLastName = actor[2][0].toLowerCase();
    }
    if (firstCharacterName === 'n'
    || firstCharacterMiddleName === 'n'
    || firstCharacterLastName === 'n') {
      return true;
    } else {
      return false;
    }
  };
  const result = names.filter(filterFunc);
  return result;
}

module.exports = nIsForName;
