var Message = /** @class */ (function () {
    function Message() {
    }
    Message.prototype.deserialize = function (input) {
        this.id = input.id;
        this.content = input.content;
        this.board_id = input.board_id;
        this.author = input.author;
        return this;
    };
    Message.prototype.serialize = function (object) {
        return JSON.stringify(this);
    };
    return Message;
}());
