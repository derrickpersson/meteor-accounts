import { resetDatabase } from "meteor/xolvio:cleaner";
import faker from "faker";
import assert from "assert";

Meteor.methods({
    'test.resetDatabase': () => resetDatabase(),
});

describe("User validation", function (done) {
    const userData = {
        email: faker.internet.exampleEmail(),
        username: faker.internet.userName(),
        password: faker.internet.password(),
        terms: true,
    }


    beforeEach(function (done) {
        Meteor.call('test.resetDatabase', done);
    });

    it("should allow users to be created if all info is present", function () {
        Accounts.createUser(userData);
        assert.equal(Accounts.findUserByEmail(userData.email).username, userData.username);
    });

    it("should fail if user is missing email", function () {
        assert.throws(() => Accounts.createUser({
            ...userData,
            email: undefined,
        }));
    });

    it("should fail if user is missing username", function () {
        assert.throws(() => Accounts.createUser({
            ...userData,
            username: undefined,
        }));
    });
})