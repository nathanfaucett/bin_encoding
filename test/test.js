var assert = require("assert"),
    bin = require("../src/index");


describe("bin_encoding", function() {
    describe("#stringToBytes(str)", function() {
        it("should return string to bytes", function() {
            assert.deepEqual(
                bin.stringToBytes("this is a test"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]
            );
        });
    });
    describe("#bytesToString(bytes)", function() {
        it("should return bytes to string", function() {
            assert.deepEqual(
                bin.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
                "this is a test"
            );
        });
    });
});
