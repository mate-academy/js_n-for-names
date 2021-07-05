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
  // Solution with forEach and Set:
  /* const nParty = [];

  names.forEach(function(item, key, array){
    const checker = item.split(' ');

    checker.forEach(function(name, key, array) {
      if(name.indexOf('N') === 0) {
        nParty.push(item);
      }
    });
  });

  const filtredActors = [...new Set(nParty)];

  return filtredActors; */

  // Solution with filter and sheetcode:
  /* const filtredArray = names.filter(function(item, key, array) {
    const checker = item.split(' ');
    const checkerObj = { ...checker };

    for (let name in checkerObj) {
      if (checkerObj[name].indexOf('N') === 0) {
        return true;
      }
    }
  });

  return filtredArray; */

  // Solution with Filter and Some (true):
  const filtredArray = names.filter(function(item, key, array) {
    const checker = item.split(' ');

    return checker.some(function(name) {
      return name.indexOf('N') === 0;
    });
  });

  return filtredArray;
}

module.exports = nIsForName;
