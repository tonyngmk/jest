const reverseString = require("./reverseString");

test("reverseString functions exists", () => {
    expect(reverseString).toBeDefined();
});

test("String reverses", () => {
    expect(reverseString("hello")).toEqual("olleh");
});


