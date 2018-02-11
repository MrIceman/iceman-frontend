class Message implements ISerializable<Message> {
    id: number;
    content: string;
    created_on: number;
    board_id: number;
    author: number;


    deserialize(input): Message {
        this.id = input.id;
        this.content = input.content;
        this.board_id = input.board_id;
        this.author = input.author;
        return this;
    }

    serialize(object: Message): string {
        return JSON.stringify(this);
    }
}