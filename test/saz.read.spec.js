var fs = require("fs");
var JSZip = require("jszip");

describe("读取saz文件", function () {
    this.timeout(0);

    it("读取examples.saz", function (done) {
        fs.readFile("examples.saz", function (err, data) {
            if (err) throw err;
            JSZip.loadAsync(data).then(function (zip) {
                //    console.log("读取成功");
                done();
            });
        });
    })
})