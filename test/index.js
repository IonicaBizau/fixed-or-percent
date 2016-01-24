const tester = require("tester")
    , fixedOrPercent = require("../lib")
    ;

tester.describe("compute-size", test => {
    test.should("handle fixed values", () => {
        test.expect(fixedOrPercent(42)).toBe(42);
    });
    test.should("handle fixed values providing the total (not used)", () => {
        test.expect(fixedOrPercent(10, 420)).toBe(10);
    });
    test.should("handle percent values", () => {
        test.expect(fixedOrPercent("10%", 420)).toBe(42);
    });
});
