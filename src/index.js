var isArrayLike = require("core.is_array_like"),
    isObjectLike = require("core.is_object_like"),
    isString = require("core.is_string"),
    split = require("string.split"),
    map = require("core.map");

var ArrayProto_slice = Array.prototype.slice;

module.exports = toArray;

function toArray(value) {

    if (isArrayLike(value)) {

        return ArrayProto_slice.call(value);

    } else if (isString(value)) {

        return split(value, "");

    } else if (isObjectLike(value)) {

        return map(value, function(value, key) {
            return [key, value];
        });

    } else {

        return [];

    }

}
