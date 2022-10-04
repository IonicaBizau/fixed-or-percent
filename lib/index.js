/**
 * No need to import packages or depend on other packages
 */

/**
 * fixedOrPercent
 * Gets the fixed or percent value.
 *
 * @name fixedOrPercent
 * @function
 * @param {String|Number} input The fixed or percent value (e.g. `42`, `"42%"`).
 * @param {Number} total The total value (used when having a percent value).
 * @return {Number} The fixed or percent value.
 */
module.exports = function fixedOrPercent(input, total) {

    if (typeof input == "string" && input.includes("%")){ // check if string and formatted as percentage
        return (parseInt(input.replace("%","")) * total) / 100
    }
    return input;
};
