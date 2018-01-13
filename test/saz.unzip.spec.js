var fs = require("fs");
var unzip = require("unzip");

describe("解压saz文件", function () {
    this.timeout(0);

    it("解压examples.saz", function (done) {
        var data = fs.createReadStream('./examples.saz')
            .pipe(unzip.Extract({
                path: './fiddler/'
            }));
        setTimeout(done,2000);
    })
})