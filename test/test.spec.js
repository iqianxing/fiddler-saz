var assert = require("chai").assert;
var should = require("should");
var fs = require("fs");
var path = require("path");
var xml2json = require("xml2json");

var raws = fs.readdirSync("./fiddler/raw/");
var parser = xml2json;

describe("遍历saz解压后的数据", function () {
    this.timeout(0);

    raws.filter(function (raw) {
            return raw.match(/.*xml/);
        })
        .forEach(function (raw) {
            it(raw, function (done) {
                var sessionXml = path.resolve(__dirname, "../fiddler/raw", raw);
                fs.readFile(sessionXml, function (err, data) {
                    assert.notOk(err);

                    var sessionJson = parser.toJson(data);
                    // console.log(sessionJson);
                    sessionJson = JSON.parse(sessionJson);
                    var sessionFlags = sessionJson.Session.SessionFlags.SessionFlag;
                    var comment = sessionFlags.filter(function(sessionFlag){
                        return sessionFlag.N =="ui-comments";
                    })
                    console.log("      "+comment[0].V)
                    done();
                })
            });
        });
});