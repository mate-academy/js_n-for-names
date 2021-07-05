'use strict';

function nIsForName(names) {
  return names.filter(
    fullName => fullName.split(' ').some(name => name[0] === 'N')
  );
}

module.exports = nIsForName;
