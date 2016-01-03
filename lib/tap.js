// NPM MODULES
var shell = require('shelljs');
var _ = require('lodash');

/**
 * @description Taps a homebrew tap.
 *
 * @param {string[]} taps - An array of the taps you want to tap.
 *
 * @return {object[]} A collection of return values from shell.exec().
 */
function tap(taps) {
  'use strict';
  // Tap each tap
  let execResults = _.map(taps, tap => shell.exec(`brew tap ${tap}`));

  return execResults;
}

module.exports = tap;
