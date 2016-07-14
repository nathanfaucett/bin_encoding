bin encoding
=======

bin encoding/decoding for the browser and node.js

```javascript
var bin = require("bin_encoding");


bin.stringToBytes("this is a test") === [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116];
bin.bytesToString([116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]) === "this is a test";
```
