class User implements ISerializable<User> {
    id: number;
    account_name: string;
    display_name: string;
    password: string;

    deserialize(input): User {
        this.id = input.id;
        this.account_name = input.account_name;
        this.display_name = input.display_name;
        this.password = input.password;
        return this;
    }

    serialize(object: User): string {
        return JSON.stringify(this);
    }
}