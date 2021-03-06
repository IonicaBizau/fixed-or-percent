const percent = require("percent-value")
    , isPercent = require("is-percent")
    ;

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
    if (isPercent(input)) {
        return percent(input).from(total);
    }
    return input;
};
