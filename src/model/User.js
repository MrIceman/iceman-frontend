var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.deserialize = function (input) {
        this.id = input.id;
        this.account_name = input.account_name;
        this.display_name = input.display_name;
        this.password = input.password;
        return this;
    };
    User.prototype.serialize = function (object) {
        return JSON.stringify(this);
    };
    return User;
}());
