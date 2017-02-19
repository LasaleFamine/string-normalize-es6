'use strict';

module.exports = input => typeof input === 'string' ? input.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : null;
