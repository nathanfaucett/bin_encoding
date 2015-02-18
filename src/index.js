var bin = exports;


bin.stringToBytes = function(str) {
    var bytes = [],
        i = -1,
        il = str.length - 1;

    while (i++ < il) {
        bytes.push(str.charCodeAt(i) & 0xFF);
    }

    return bytes;
};

bin.bytesToString = function(bytes) {
    var str = "",
        i = -1,
        il = bytes.length - 1;

    while (i++ < il) {
        str += String.fromCharCode(bytes[i]);
    }

    return str;
};
