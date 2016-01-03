// NPM MODULES
var shell = require('shelljs');
var _ = require('lodash');

/**
 * @description Installs a homebrew formula.
 *
 * @param {string} formula - The formula you would like to install.
 * @param {string[]} options - An array of options for the formula,
                     possibly empty.
 * @param {boolean} isCask - Is the formula you're installing a cask?
 *
 * @return {object} The return object of shelljs.exec().
 */
function installFormula(formula, options, isCask) {
  'use strict';
  let installCmd = isCask ? 'brew cask install' : 'brew install';
  let optionsString = options ? options.join(' ') : '';
  let cmd = `${installCmd} ${formula} ${optionsString}`;

  let execResult = shell.exec(cmd);

  return execResult;
}

/**
 * @description Installs a collection of formulas.
 *
 * @param {object[]} formulas - A collection of formula objects.
 *
 * @return {object[]} A collection of return objects from shelljs.exec().
 */
function install(formulas) {
  'use strict';

  // Install each formula in formulas.
  let execResults = _.map(formulas, formula => installFormula(
    formula.name,
    formula.options,
    formula.isCask
  ));

  return execResults;
}

// Register install() with exports.
module.exports = install;
