var Validator = require("../Validator").Validator;

describe("Validator", function() {
    var validator;
        
    beforeEach(function() {
        validator = new Validator();
    });

    it("validator should be object", function () {
        expect(typeof validator).toEqual("object");
    });
});
