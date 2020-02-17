export class MessageModel {

    message_id: number;
    is_current_operator: boolean;
    author_name: string;
    author_pic: string; // img url
    message: string;
    message_type: MessageType; //
    added_date: string; // Y-m-d H:i:s
    is_readed: boolean;

    deserialize(input: any): MessageModel {
        return Object.assign(new MessageModel(), input);
    }
}

export enum MessageType {
    User,
    Operator
}
