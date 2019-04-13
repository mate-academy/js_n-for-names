'use strict';

function nIsForName(names) {
  let resultArray = names.filter(item => item.includes('N') ? true : 0);
  return resultArray;
};

module.exports = nIsForName;
