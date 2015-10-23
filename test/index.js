var tape = require("tape"),
    bin = require("..");


tape("bin_encoding #stringToBytes(str)", function(assert) {
    assert.deepEqual(
        bin.stringToBytes("this is a test"), [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116],
        "should return string to bytes"
    );
    assert.end();
});

tape("bin_encoding #bytesToString(bytes)", function(assert) {
    assert.deepEqual(
        bin.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]),
        "this is a test",
        "should return bytes to string"
    );
    assert.end();
});
