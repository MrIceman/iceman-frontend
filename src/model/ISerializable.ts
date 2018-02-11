interface ISerializable<T> {
    deserialize(input: Object): T;

    serialize(object: T): string;
}