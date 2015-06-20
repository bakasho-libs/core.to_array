var test = require("tape"),
    toArray = require("../src/index");

function args() {
    return arguments;
}

var toS = Object.prototype.toString;

test("toArray", function(t) {

    var argsToArray = toArray(args(1, 2));

    t.equal(toS.call(argsToArray), "[object Array]", "converts args to array");
    t.deepEqual(argsToArray, [1, 2], "keeps conversion of arguments to array values");

    var strToArray = toArray("foo");

    t.equal(toS.call(strToArray), "[object Array]", "converts strings to array");
    t.deepEqual(strToArray, ["f", "o", "o"], "splits string into chars");

    t.deepEqual(toArray(""), [], "empty string returns empty array");

    if (typeof(Buffer) !== "undefined") {
        var bufToArray = toArray(new Buffer([10, 20, 30]));

        t.equal(toS.call(bufToArray), "[object Array]", "converts buffer to array");
        t.deepEqual(bufToArray, [10, 20, 30], "converts buffer values into array values");
    }

    if (typeof(Int8Array) !== "undefined") {
        var i8aToArray = toArray(new Int8Array([5, 10, 15]));

        t.equal(toS.call(i8aToArray), "[object Array]", "converts int8array to array");
        t.deepEqual(i8aToArray, [5, 10, 15], "converts int8array values into array values");
    }

    t.deepEqual(toArray(null), [], "null returns empty array");
    t.deepEqual(toArray(undefined), [], "undefined returns empty array");
    t.deepEqual(toArray(45), [], "number returns empty array");
    t.deepEqual(toArray(NaN), [], "NaN returns empty array");
    t.deepEqual(toArray(true), [], "boolean returns empty array");

    var obj = {
        n1: 100,
        n2: "foo"
    };

    var objToArray = toArray(obj);

    t.deepEqual(objToArray, [
        ["n1", 100],
        ["n2", "foo"]
    ], "converts object key/values to nested array");

    t.end();

});
