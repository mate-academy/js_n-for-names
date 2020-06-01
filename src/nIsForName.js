'use strict';

function nIsForName(names) {
  function findName(name) {
    return name.split(' ').some(isStartWithN);
  }

  function isStartWithN(item) {
    return item.startsWith('N');
  }

  return names.filter(findName);
}

module.exports = nIsForName;
