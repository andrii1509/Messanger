export class UserModel {

    id: number;

    deserialize(input: any): UserModel {
        return Object.assign(new UserModel(), input);
    }
}
