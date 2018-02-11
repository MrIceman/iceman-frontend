class Board implements ISerializable<Board> {

    id: number;
    location: string;
    created_on: number;
    messages: Array<Message>;

    deserialize(input): Board {
        this.id = input.id;
        this.location = input.location;
        this.created_on = input.created_on;
        this.messages = [];
        input.messages.forEach((messageElement) => {
            let msg = new Message();
            this.messages.push(msg.deserialize(messageElement));
        });
        return this;
    }

    serialize(object: Board): string {
        return JSON.stringify(this);
    }

}


