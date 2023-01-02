const functions = require('./functions');


// Run start and end
// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase()); 
// const initDatabase = () => console.log("Database initialised");
// const closeDatabase = () => console.log("Database Closed");

// Run only once
// const nameCheck = () => console.log("Checking name");
// describe("Checking Names", () => {
//     beforeEach(() => nameCheck());

//     test("User is Jeff", () => {
//         const user = "Jeff";
//         expect(user).toBe("Jeff");
//     });
// });


// Primitive Types
test("Adds 2+2 equals 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2+2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
    expect(functions.checkValue(0)).toBeFalsy();
    expect(functions.checkValue(null)).toBeFalsy();
});

test("Should be truthy", () => {
    expect(functions.checkValue(2)).toBeTruthy();
});

test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThan(1600);
});


// Objects

test("User should be Brad Traversy object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy"
    });
});


// Regex
test("There is no I in team", () => {
    expect("team").not.toMatch(/I/);
});


// Arrays
test("Admin should be in usernames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toContain("admin");
});

// Promise
test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        });
});


// Async Await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham");
});
