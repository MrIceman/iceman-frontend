var Board = /** @class */ (function () {
    function Board() {
    }
    Board.prototype.deserialize = function (input) {
        var _this = this;
        this.id = input.id;
        this.location = input.location;
        this.created_on = input.created_on;
        this.messages = [];
        input.messages.forEach(function (messageElement) {
            var msg = new Message();
            _this.messages.push(msg.deserialize(messageElement));
        });
        return this;
    };
    Board.prototype.serialize = function (object) {
        return JSON.stringify(this);
    };
    return Board;
}());
