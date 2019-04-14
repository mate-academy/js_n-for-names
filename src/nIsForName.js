'use strict';

function nIsForName(names) {
  let resultArray = names.filter(item => item.includes('N'));
  return resultArray;
};

module.exports = nIsForName;
